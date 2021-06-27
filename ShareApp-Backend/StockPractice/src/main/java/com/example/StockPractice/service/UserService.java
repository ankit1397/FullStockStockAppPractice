package com.example.StockPractice.service;

import com.example.StockPractice.model.User;

public interface UserService {
   public User register(User user);
   public User findByUsername(String username);
}
