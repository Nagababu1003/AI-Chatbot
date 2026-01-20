package com.chatbot.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chatbot.dto.ChatRequest;
import com.chatbot.dto.ChatResponse;
import com.chatbot.entity.ChatMessage;
import com.chatbot.service.ChatService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@CrossOrigin(origins = "https://ai-chatbot-1-zoe0.onrender.com")
public class ChatController {

    private final ChatService chatService;

    @GetMapping
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Chat API is running");
    }

    
    @PostMapping("/api/chat")
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        if (request.getMessage() == null || request.getMessage().isBlank()) {
            return ResponseEntity.badRequest()
                    .body(new ChatResponse("Message cannot be empty"));
        }
        String reply = chatService.chat(request.getMessage());
        return ResponseEntity.ok(new ChatResponse(reply));
    }


    @GetMapping("/history")
    public ResponseEntity<List<ChatMessage>> history() {
        return ResponseEntity.ok(chatService.getHistory());
    }
}
