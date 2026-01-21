package com.chatbot.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.chatbot.dto.ChatRequest;
import com.chatbot.dto.ChatResponse;
import com.chatbot.entity.ChatMessage;
import com.chatbot.repository.ChatMessageRepository;


@Service
public class ChatService {

	private final ChatClient chatClient;
	private final ChatMessageRepository repository;
	
	public ChatService(ChatClient.Builder builder, ChatMessageRepository repository) {
		this.chatClient = builder.build();
		this.repository = repository;
	}
	
	public ChatResponse chat(ChatRequest request) {
		String aiReply=  chatClient.prompt().user(request.getMessage())
				.call().content();
		
		ChatMessage chatmessage=ChatMessage.builder()
				.userMessage(request.getMessage())
				.aiResponse(aiReply)
				.createdAt(LocalDateTime.now())
				.build();
		
		repository.save(chatmessage);
		
		return new ChatResponse(aiReply);
	}
	
	public List<ChatMessage> getHistory() {
		return repository.findAll();
	}
}
