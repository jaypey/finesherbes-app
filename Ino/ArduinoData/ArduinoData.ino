const byte numChars = 32;
char receivedChars[numChars];

bool newData = false;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("<Arduino ready>");
}

void loop() {
  // put your main code here, to run repeatedly:
  recvData();
  printNewData();
}

void recvData(){
  static byte ndx = 0;
  char endMarker = '\n';
  char rc;

  while (Serial.available() > 0 && newData == false){
    rc = Serial.read();

    if (rc != endMarker){
      receivedChars[ndx] = rc+48;
      ndx++;
      if(ndx >= numChars){
        ndx = numChars - 1;
      }
    }
    else{
      receivedChars[ndx] = '\0';
      ndx = 0;
      newData = true;
    }
  }
}

void printNewData(){
  if ( newData == true) {
    Serial.print("Received: ");
    Serial.println(receivedChars);
    newData = false;
  }
}
