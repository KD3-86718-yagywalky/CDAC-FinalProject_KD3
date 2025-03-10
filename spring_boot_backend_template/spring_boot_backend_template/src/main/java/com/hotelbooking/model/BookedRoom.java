package com.hotelbooking.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class BookedRoom {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;
	
	@Column(name = "check_In")
	private LocalDate checkInDate;
	
	@Column(name = "check_Out")
	private LocalDate checkOutDate;
	
	@Column(name = "guest_FullName")
	private String guestFullName;
	
	@Column(name = "guest_Email")
	private String guestEmail;
	
	@Column(name = "adults")
	private int NumOfAdults;
	
	@Column(name = "children")
	private int NumOfChildern;
	
	@Column(name = "total_guest")
	private int totalNumOfGuest;
	
	@Column(name = "confirmation_Code")
	private String bookingConfirmationCode;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_id")
	private Room room;
	
	
	
	public void calculateTotalNumOfGuest() {
		
		this.totalNumOfGuest=this.NumOfAdults + this.NumOfChildern;
	}

	public void setNumOfAdults(int numOfAdults) {
		NumOfAdults = numOfAdults;
		calculateTotalNumOfGuest();
	}

	public void setNumOfChildern(int numOfChildern) {
		NumOfChildern = numOfChildern;
		calculateTotalNumOfGuest();
	}
	
	
	
	
	

	
	

}
