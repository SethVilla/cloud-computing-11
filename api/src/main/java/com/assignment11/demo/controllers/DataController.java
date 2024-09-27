package com.assignment11.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DataController {

    @GetMapping("/data")
    public Map<String, String> data() {
        Map<String, String> res = new HashMap<>();
        res.put("success", "true");
        res.put("message", "Hello From Spring");
        return res;
    }
}
