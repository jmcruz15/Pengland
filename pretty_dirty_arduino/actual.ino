#include <LedControl.h>
#include <Servo.h>
#include "binary.h"

    Servo servo;
int const trigPin1 = 6;
int const echoPin1 = 5;
int const trigPin2 = 4;
int const echoPin2 = 9;

int duration1; // variable for the duration of sound wave travel
int distance1;//variable for the distance measurement

int duration2; // variable for the duration of sound wave travel
int distance2;//variable for the distance measurement
LedControl lc=LedControl(12,11,10,1);

byte happy[8] = {
B00000000,
B00000000,
B11111111,
B10000001,
B01000010,
B00111100,
B00000000,
B00000000
};

byte idle[8] = {
B00000000,
B00000000,
B00011000,
B00100100,
B00100100,
B00100100,
B00011000,
B00000000
};
byte idle2[8] = {
B00000000,
B00000000,
B00000000,
B00011000,
B00011000,
B00000000,
B00000000,
B00000000
};

byte sad[8] = {
B01000000,
B01000000,
B00000000,
B00111100,
B01000010,
B00000000,
B00000000,
B00000000

};

void setup()
{
lc.shutdown(0,false); //sets up 8x8 matrix
lc.setIntensity(0,10000); // Set brightness to a medium value
lc.clearDisplay(0); // Clear the display  
pinMode(trigPin1, OUTPUT); 
pinMode(echoPin1, INPUT); 
pinMode(trigPin2, OUTPUT); 
pinMode(echoPin2, INPUT); 
servo.attach(3);
}

void loop()
{       
digitalWrite(trigPin1, HIGH); 
delay(1);
digitalWrite(trigPin1, LOW);
duration1 = pulseIn(echoPin1, HIGH);
distance1 = (duration1/2) / 29.1;
Serial.println(distance1);
delayMicroseconds(100);

digitalWrite(trigPin2, HIGH); 
delay(1);
digitalWrite(trigPin2, LOW);
duration2 = pulseIn(echoPin2, HIGH);
distance2 = (duration2/2) / 29.1;
Serial.println(distance2);
delayMicroseconds(200);

if (distance1 <= 50 && distance1 >= 0) {
	servo.write(50);
  } 
else  {
	servo.write(160);
}

 if (distance1 <= 50 && distance2 > 5) {
  lc.setRow(0,0,happy[0]);
  lc.setRow(0,1,happy[1]);
  lc.setRow(0,2,happy[2]);
  lc.setRow(0,3,happy[3]);
  lc.setRow(0,4,happy[4]);
  lc.setRow(0,5,happy[5]);
  lc.setRow(0,6,happy[6]);
  lc.setRow(0,7,happy[7]);
  delay(5000);
  }
else if (distance1 >50 && distance2 <= 5){
    lc.setRow(0,0,sad[0]);
  lc.setRow(0,1,sad[1]);
  lc.setRow(0,2,sad[2]);
  lc.setRow(0,3,sad[3]);
  lc.setRow(0,4,sad[4]);
  lc.setRow(0,5,sad[5]);
  lc.setRow(0,6,sad[6]);
  lc.setRow(0,7,sad[7]);

}

else {
  lc.setRow(0,0,idle[0]);
  lc.setRow(0,1,idle[1]);
  lc.setRow(0,2,idle[2]);
  lc.setRow(0,3,idle[3]);
  lc.setRow(0,4,idle[4]);
  lc.setRow(0,5,idle[5]);
  lc.setRow(0,6,idle[6]);
  lc.setRow(0,7,idle[7]);
  delay(2000);
  lc.setRow(0,0,idle2[0]);
  lc.setRow(0,1,idle2[1]);
  lc.setRow(0,2,idle2[2]);
  lc.setRow(0,3,idle2[3]);
  lc.setRow(0,4,idle2[4]);
  lc.setRow(0,5,idle2[5]);
  lc.setRow(0,6,idle2[6]);
  lc.setRow(0,7,idle2[7]); 
  delay(2000);
  
}
}
