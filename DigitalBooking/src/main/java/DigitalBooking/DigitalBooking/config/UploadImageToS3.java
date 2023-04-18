package DigitalBooking.DigitalBooking.config;

import DigitalBooking.DigitalBooking.model.Images;
import DigitalBooking.DigitalBooking.model.dto.ImagesDTO;
import DigitalBooking.DigitalBooking.service.ImagesService;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import org.springframework.context.annotation.Configuration;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

@Configuration
public class UploadImageToS3 {

    private static final String BUCKET_NAME = "grupo1-digitalbooking-img";
    private static final String ACCESS_KEY = "AKIASDYGBXDR2XH5JKJK";
    private static final String SECRET_KEY = "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";
    private static final String REGION = "us-east-2";




    public static String getURL(ImagesDTO images) {
        BasicAWSCredentials credentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);

        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(REGION)
                .build();

        try {
            URL url = new URL(images.getUrl());
                    URLConnection conn = url.openConnection();
            InputStream inputStream = conn.getInputStream();

            File file = new File("output.jpg");
            OutputStream outputStream = new FileOutputStream(file);

            byte[] buffer = new byte[2048];
            int length;

            while ((length = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, length);
            }

            outputStream.close();
            inputStream.close();

            System.out.println("File downloaded successfully.");

            String keyName = images.getTitle();
            PutObjectRequest request = new PutObjectRequest(BUCKET_NAME, keyName, file);

                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setContentType("image/jpeg");
                metadata.addUserMetadata("x-amz-meta-title", "ejemplo");

                request.setMetadata(metadata);

                PutObjectResult result = s3Client.putObject(request);

                System.out.println("Imagen subida exitosamente: " + result.getETag());

                String imageUrl = s3Client.getUrl(BUCKET_NAME, keyName).toExternalForm();

                System.out.println("URL de la imagen: " + imageUrl);

                return imageUrl;

        } catch (IOException e) {
            System.out.println("An error occurred while downloading the file: " + e.getMessage());

        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }


    return null;

    }

}
