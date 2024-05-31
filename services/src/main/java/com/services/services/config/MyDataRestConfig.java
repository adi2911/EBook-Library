package com.services.services.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.services.services.entity.Book;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String allowedOrigin = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupportedActions = { HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PATCH, HttpMethod.PUT };

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class, config, unsupportedActions);

        cors.addMapping(config.getBasePath() + "/**").allowedOrigins(allowedOrigin);

    }

    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config,
            HttpMethod[] unSupporHttpMethods) {
        config.getExposureConfiguration().forDomainType(theClass)
                .withItemExposure((metData, httpMethods) -> httpMethods.disable(unSupporHttpMethods))
                .withCollectionExposure((metData, httpMethods) -> httpMethods.disable(unSupporHttpMethods));
    }

}
