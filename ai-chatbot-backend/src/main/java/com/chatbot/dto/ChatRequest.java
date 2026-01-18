package com.chatbot.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChatRequest {
	@NotBlank(message="Message must not be empty")
	private String message;
}
