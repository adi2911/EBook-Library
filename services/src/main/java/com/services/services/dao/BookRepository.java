package com.services.services.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.services.services.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
