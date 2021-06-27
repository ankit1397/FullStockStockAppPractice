package com.example.StockPractice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.StockPractice.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
   public User findByUsername(String username);
}
