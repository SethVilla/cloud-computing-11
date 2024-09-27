# First stage: Build the application using Maven with Amazon Corretto 21
FROM maven:3.8-amazoncorretto-21 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

# Second stage: Use Amazon Corretto 21 JDK for runtime environment
FROM amazoncorretto:21-alpine
COPY --from=build /usr/src/app/target/api-0.0.1-SNAPSHOT.jar /usr/app/api-0.0.1-SNAPSHOT.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/usr/app/api-0.0.1-SNAPSHOT.jar"]
