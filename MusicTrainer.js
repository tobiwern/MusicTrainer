/*
 ToDo:
 - StartButton should be temporarily disabled until access to micro has been granted
 - No tone should be played until the micro dialog has been accepted (not technically...but from a user-interaction)
*/
 
const allNotes_regular = [
  { name: "C6", frequency: 1046.50, mp3: "piano/.mp3", position: 140 },
  { name: "H5", frequency: 987.77, mp3: "piano/.mp3", position: 130 },
  { name: "B5", frequency: 932.33, mp3: "piano/88.mp3", position: 130 },
  { name: "A#5", frequency: 932.33, mp3: "piano/87.mp3", position: 120 },
  { name: "A5", frequency: 880.00, mp3: "piano/86.mp3", position: 120 },
  { name: "Ab5", frequency: 830.61, mp3: "piano/85.mp3", position: 120 },
  { name: "G#5", frequency: 830.61, mp3: "piano/85.mp3", position: 110 },
  { name: "G5", frequency: 783.99, mp3: "piano/84.mp3", position: 110 },
  { name: "Gb5", frequency: 739.99, mp3: "piano/83.mp3", position: 110 },
  { name: "F#5", frequency: 739.99, mp3: "piano/83.mp3", position: 100 },
  { name: "F5", frequency: 698.46, mp3: "piano/82.mp3", position: 100 },
  { name: "E5", frequency: 659.25, mp3: "piano/81.mp3", position: 90 },
  { name: "Eb5", frequency: 622.25, mp3: "piano/80.mp3", position: 90 },
  { name: "D#5", frequency: 622.25, mp3: "piano/80.mp3", position: 80 },
  { name: "D5", frequency: 587.33, mp3: "piano/79.mp3", position: 80 },
  { name: "Db5", frequency: 554.37, mp3: "piano/78.mp3", position: 80 },
  { name: "C#5", frequency: 554.37, mp3: "piano/78.mp3", position: 70 },
  { name: "C5", frequency: 523.25, mp3: "piano/77.mp3", position: 70 },
  { name: "H4", frequency: 493.88, mp3: "piano/76.mp3", position: 60 },
  { name: "B4", frequency: 466.16, mp3: "piano/75.mp3", position: 60 },
  { name: "A#4", frequency: 466.16, mp3: "piano/75.mp3", position: 50 },
  { name: "A4", frequency: 440.00, mp3: "piano/74.mp3", position: 50 },
  { name: "Ab4", frequency: 415.30, mp3: "piano/73.mp3", position: 50 },
  { name: "G#4", frequency: 415.30, mp3: "piano/73.mp3", position: 40 },
  { name: "G4", frequency: 392.00, mp3: "piano/72.mp3", position: 40 },
  { name: "Gb4", frequency: 369.99, mp3: "piano/71.mp3", position: 40 },
  { name: "F#4", frequency: 369.99, mp3: "piano/71.mp3", position: 30 },
  { name: "F4", frequency: 349.23, mp3: "piano/70.mp3", position: 30 },
  { name: "E4", frequency: 329.63, mp3: "piano/69.mp3", position: 20 },
  { name: "Eb4", frequency: 311.13, mp3: "piano/68.mp3", position: 20 },
  { name: "D#4", frequency: 311.13, mp3: "piano/68.mp3", position: 10 },
  { name: "D4", frequency: 293.66, mp3: "piano/67.mp3", position: 10 },
  { name: "Db4", frequency: 277.18, mp3: "piano/66.mp3", position: 10 },
  { name: "C#4", frequency: 277.18, mp3: "piano/66.mp3", position: 0 },
  { name: "C4", frequency: 261.63, mp3: "piano/65.mp3", position: 0 }, // Positioned for middle C
  { name: "H3", frequency: 246.94, mp3: "piano/64.mp3", position: -10 },
  { name: "B3", frequency: 233.08, mp3: "piano/63.mp3", position: -10 },
  { name: "A#3", frequency: 233.08, mp3: "piano/62.mp3", position: -20 },
  { name: "A3", frequency: 220.00, mp3: "piano/61.mp3", position: -20 },
  { name: "Ab3", frequency: 207.65, mp3: "piano/60.mp3", position: -20 },
  { name: "G#3", frequency: 207.65, mp3: "piano/60.mp3", position: -30 },
  { name: "G3", frequency: 196.00, mp3: "piano/59.mp3", position: -30 },
  { name: "Gb3", frequency: 185.00, mp3: "piano/58.mp3", position: -30 },
  { name: "F#3", frequency: 185.00, mp3: "piano/58.mp3", position: -40 },
  { name: "F3", frequency: 174.61, mp3: "piano/57.mp3", position: -40 },
  { name: "E3", frequency: 164.81, mp3: "piano/56.mp3", position: -50 },
  { name: "Eb3", frequency: 155.56, mp3: "piano/55.mp3", position: -50 },
  { name: "D#3", frequency: 155.56, mp3: "piano/55.mp3", position: -60 },
  { name: "D3", frequency: 146.83, mp3: "piano/54.mp3", position: -60 },
  { name: "Db3", frequency: 138.59, mp3: "piano/53.mp3", position: -60 },
  { name: "C#3", frequency: 138.59, mp3: "piano/53.mp3", position: -70 },
  { name: "C3", frequency: 130.81, mp3: "piano/52.mp3", position: -70 },
  { name: "H2", frequency: 123.47, mp3: "piano/51.mp3", position: -80 },
  { name: "B2", frequency: 116.54, mp3: "piano/50.mp3", position: -80 },
  { name: "A#2", frequency: 116.54, mp3: "piano/50.mp3", position: -90 },
  { name: "A2", frequency: 110.00, mp3: "piano/49.mp3", position: -90 },
  { name: "Ab2", frequency: 103.83, mp3: "piano/48.mp3", position: -90 },
  { name: "G#2", frequency: 103.83, mp3: "piano/48.mp3", position: -100 },
  { name: "G2", frequency: 98.00, mp3: "piano/47.mp3", position: -100 },
  { name: "Gb2", frequency: 92.50, mp3: "piano/46.mp3", position: -100 },
  { name: "F#2", frequency: 92.50, mp3: "piano/46.mp3", position: -110 },
  { name: "F2", frequency: 87.31, mp3: "piano/45.mp3", position: -110 },
  { name: "E2", frequency: 82.41, mp3: "piano/44.mp3", position: -120 },
  { name: "Eb2", frequency: 77.78, mp3: "piano/43.mp3", position: -120 },
  { name: "D#2", frequency: 77.78, mp3: "piano/43.mp3", position: -130 },
  { name: "D2", frequency: 73.42, mp3: "piano/42.mp3", position: -130 },
  { name: "Db2", frequency: 69.30, mp3: "piano/41.mp3", position: -130 },
  { name: "C#2", frequency: 69.30, mp3: "piano/41.mp3", position: -140 },
  { name: "C2", frequency: 65.41, mp3: "piano/40.mp3", position: -140 },
  { name: "H1", frequency: 61.74, mp3: "piano/39.mp3", position: -150 },
  { name: "B1", frequency: 58.27, mp3: "piano/38.mp3", position: -150 },
  { name: "A#1", frequency: 58.27, mp3: "piano/38.mp3", position: -160 },
  { name: "A1", frequency: 55.00, mp3: "piano/37.mp3", position: -160 },
  { name: "Ab1", frequency: 51.91, mp3: "piano/36.mp3", position: -160 },
  { name: "G#1", frequency: 51.91, mp3: "piano/36.mp3", position: -170 },
  { name: "G1", frequency: 49.00, mp3: "piano/35.mp3", position: -170 },
  { name: "Gb1", frequency: 46.25, mp3: "piano/34.mp3", position: -170 },
  { name: "F#1", frequency: 46.25, mp3: "piano/34.mp3", position: -180 },
  { name: "F1", frequency: 43.65, mp3: "piano/33.mp3", position: -180 },
  { name: "E1", frequency: 41.20, mp3: "piano/32.mp3", position: -190 },
  { name: "Eb1", frequency: 38.89, mp3: "piano/31.mp3", position: -190 },
  { name: "D#1", frequency: 38.89, mp3: "piano/31.mp3", position: -200 },
  { name: "D1", frequency: 36.71, mp3: "piano/30.mp3", position: -200 },
  { name: "Db1", frequency: 34.65, mp3: "piano/29.mp3", position: -200 },
  { name: "C#1", frequency: 34.65, mp3: "piano/29.mp3", position: -210 },
  { name: "C1", frequency: 32.70, mp3: "piano/28.mp3", position: -210 }
];
const allNotes_sax_alt = [			
  { name: "C7"	, frequency:  1244.50 ,	mp3: "saxAlt/C7.mp3"	, position:  210  },
  { name: "H6"	, frequency:  1174.66 ,	mp3: "saxAlt/B6.mp3"	, position:  200  },
  { name: "B6"	, frequency:  1108.74 ,	mp3: "saxAlt/A6di.mp3"	, position:  200  },
  { name: "A#6"	, frequency:  1108.74 ,	mp3: "saxAlt/A6di.mp3"	, position:  190  },
  { name: "A6"	, frequency:  1046.50 ,	mp3: "saxAlt/A6.mp3"	, position:  190  },
  { name: "Ab6"	, frequency:  987.76 ,	mp3: "saxAlt/G6di.mp3"	, position:  190  },
  { name: "G#6"	, frequency:  987.76 ,	mp3: "saxAlt/G6di.mp3"	, position:  180  },
  { name: "G6"	, frequency:  932.32 ,	mp3: "saxAlt/G6.mp3"	, position:  180  },
  { name: "Gb6"	, frequency:  880.00 ,	mp3: "saxAlt/F6di.mp3"	, position:  180  },
  { name: "F#6"	, frequency:  880.00 ,	mp3: "saxAlt/F6di.mp3"	, position:  170  },
  { name: "F6"	, frequency:  830.60 ,	mp3: "saxAlt/F6.mp3"	, position:  170  },
  { name: "E6"	, frequency:  784.00 ,	mp3: "saxAlt/E6.mp3"	, position:  160  },
  { name: "Eb6"	, frequency:  739.98 ,	mp3: "saxAlt/D6di.mp3"	, position:  160  },
  { name: "D#6"	, frequency:  739.98 ,	mp3: "saxAlt/D6di.mp3"	, position:  150  },
  { name: "D6"	, frequency:  698.46 ,	mp3: "saxAlt/D6.mp3"	, position:  150  },
  { name: "Db6"	, frequency:  659.26 ,	mp3: "saxAlt/C6di.mp3"	, position:  150  },
  { name: "C#6"	, frequency:  659.26 ,	mp3: "saxAlt/C6di.mp3"	, position:  140  },
  { name: "C6"	, frequency:  622.25 ,	mp3: "saxAlt/C6.mp3"	, position:  140  },
  { name: "H5"	, frequency:  587.33 ,	mp3: "saxAlt/B5.mp3"	, position:  130  },
  { name: "B5"	, frequency:  554.37 ,	mp3: "saxAlt/A5di.mp3"	, position:  130  },
  { name: "A#5"	, frequency:  554.37 ,	mp3: "saxAlt/A5di.mp3"	, position:  120  },
  { name: "A5"	, frequency:  523.25 ,	mp3: "saxAlt/A5.mp3"	, position:  120  },
  { name: "Ab5"	, frequency:  493.88 ,	mp3: "saxAlt/G5di.mp3"	, position:  120  },
  { name: "G#5"	, frequency:  493.88 ,	mp3: "saxAlt/G5di.mp3"	, position:  110  },
  { name: "G5"	, frequency:  466.16 ,	mp3: "saxAlt/G5.mp3"	, position:  110  },
  { name: "Gb5"	, frequency:  440.00 ,	mp3: "saxAlt/F5di.mp3"	, position:  110  },
  { name: "F#5"	, frequency:  440.00 ,	mp3: "saxAlt/F5di.mp3"	, position:  100  },
  { name: "F5"	, frequency:  415.30 ,	mp3: "saxAlt/F5.mp3"	, position:  100  },
  { name: "E5"	, frequency:  392.00 ,	mp3: "saxAlt/E5.mp3"	, position:  90  },
  { name: "Eb5"	, frequency:  369.99 ,	mp3: "saxAlt/D5di.mp3"	, position:  90  },
  { name: "D#5"	, frequency:  369.99 ,	mp3: "saxAlt/D5di.mp3"	, position:  80  },
  { name: "D5"	, frequency:  349.23 ,	mp3: "saxAlt/D5.mp3"	, position:  80  },
  { name: "Db5"	, frequency:  329.63 ,	mp3: "saxAlt/C5di.mp3"	, position:  80  },
  { name: "C#5"	, frequency:  329.63 ,	mp3: "saxAlt/C5di.mp3"	, position:  70  },
  { name: "C5"	, frequency:  311.13 ,	mp3: "saxAlt/C5.mp3"	, position:  70  },
  { name: "H4"	, frequency:  293.66 ,	mp3: "saxAlt/B4.mp3"	, position:  60  },
  { name: "B4"	, frequency:  277.18 ,	mp3: "saxAlt/A4di.mp3"	, position:  60  },
  { name: "A#4"	, frequency:  277.18 ,	mp3: "saxAlt/A4di.mp3"	, position:  50  },
  { name: "A4"	, frequency:  261.63 ,	mp3: "saxAlt/A4.mp3"	, position:  50  },
  { name: "Ab4"	, frequency:  246.94 ,	mp3: "saxAlt/G4di.mp3"	, position:  50  },
  { name: "G#4"	, frequency:  246.94 ,	mp3: "saxAlt/G4di.mp3"	, position:  40  },
  { name: "G4"	, frequency:  233.08 ,	mp3: "saxAlt/G4.mp3"	, position:  40  },
  { name: "Gb4"	, frequency:  220.00 ,	mp3: "saxAlt/F4di.mp3"	, position:  40  },
  { name: "F#4"	, frequency:  220.00 ,	mp3: "saxAlt/F4di.mp3"	, position:  30  },
  { name: "F4"	, frequency:  207.65 ,	mp3: "saxAlt/F4.mp3"	, position:  30  },
  { name: "E4"	, frequency:  196.00 ,	mp3: "saxAlt/E4.mp3"	, position:  20  },
  { name: "Eb4"	, frequency:  185.00 ,	mp3: "saxAlt/D4di.mp3"	, position:  20  },
  { name: "D#4"	, frequency:  185.00 ,	mp3: "saxAlt/D4di.mp3"	, position:  10  },
  { name: "D4"	, frequency:  174.61 ,	mp3: "saxAlt/D4.mp3"	, position:  10  },
  { name: "Db4"	, frequency:  164.81 ,	mp3: "saxAlt/C4di.mp3"	, position:  10  },
  { name: "C#4"	, frequency:  164.81 ,	mp3: "saxAlt/C4di.mp3"	, position:  0  },
  { name: "C4"	, frequency:  155.56 ,	mp3: "saxAlt/C4.mp3"	, position:  0  },
  { name: "H3"	, frequency:  146.83 ,	mp3: "saxAlt/C4di.mp3"	, position: -10  },
  { name: "B3"	, frequency:  138.59 ,	mp3: "saxAlt/A3di.mp3"	, position: -10  },
  { name: "A#3"	, frequency:  138.59 ,	mp3: "saxAlt/A3di.mp3"	, position: -20  },
  { name: "A3"	, frequency:  130.81 ,	mp3: "saxAlt/A3.mp3"	, position: -20  },
  { name: "Ab3"	, frequency:  123.47 ,	mp3: "saxAlt/G3di.mp3"	, position: -20  },
  { name: "G#3"	, frequency:  123.47 ,	mp3: "saxAlt/G3di.mp3"	, position: -30  },
  { name: "G3"	, frequency:  116.54 ,	mp3: "saxAlt/G3.mp3"	, position: -30  },
  { name: "Gb3"	, frequency:  110.00 ,	mp3: "saxAlt/F3di.mp3"	, position: -30  },
  { name: "F#3"	, frequency:  110.00 ,	mp3: "saxAlt/F3di.mp3"	, position: -40  },
  { name: "F3"	, frequency:  103.83 ,	mp3: "saxAlt/F3.mp3"	, position: -40  },
  { name: "E3"	, frequency:  98.00 ,	mp3: "saxAlt/E3.mp3"	, position: -50  },
  { name: "Eb3"	, frequency:  92.50 ,	mp3: "saxAlt/D3di.mp3"	, position: -50  },
  { name: "D#3"	, frequency:  92.50 ,	mp3: "saxAlt/D3di.mp3"	, position: -60  },
  { name: "D3"	, frequency:  87.31 ,	mp3: "saxAlt/D3.mp3"	, position: -60  },
  { name: "Db3"	, frequency:  82.41 ,	mp3: "saxAlt/C3di.mp3"	, position: -60  },
  { name: "C#3"	, frequency:  82.41 ,	mp3: "saxAlt/C3di.mp3"	, position: -70  },
  { name: "C3"	, frequency:  77.78 ,	mp3: "saxAlt/C3.mp3"	, position: -70  },
  { name: "H2"	, frequency:  73.42 ,	mp3: "saxAlt/B2.mp3"	, position: -80  },
  { name: "B2"	, frequency:  69.30 ,	mp3: "saxAlt/A2di.mp3"	, position: -80  },
  { name: "A#2"	, frequency:  69.30 ,	mp3: "saxAlt/A2di.mp3"	, position: -90  },
  { name: "A2"	, frequency:  65.41 ,	mp3: "saxAlt/A2.mp3"	, position: -90  },
  { name: "Ab2"	, frequency:  61.74 ,	mp3: "saxAlt/G2di.mp3"	, position: -90  },
  { name: "G#2"	, frequency:  61.74 ,	mp3: "saxAlt/G2di.mp3"	, position: -100  },
  { name: "G2"	, frequency:  58.27 ,	mp3: "saxAlt/G2.mp3"	, position: -100  },
  { name: "Gb2"	, frequency:  55.00 ,	mp3: "saxAlt/F2di.mp3"	, position: -100  },
  { name: "F#2"	, frequency:  55.00 ,	mp3: "saxAlt/F2di.mp3"	, position: -110  },
  { name: "F2"	, frequency:  51.91 ,	mp3: "saxAlt/F2.mp3"	, position: -110  },
  { name: "E2"	, frequency:  49.00 ,	mp3: "saxAlt/E2.mp3"	, position: -120  },
  { name: "Eb2"	, frequency:  46.25 ,	mp3: "saxAlt/D2di.mp3"	, position: -120  },
  { name: "D#2"	, frequency:  46.25 ,	mp3: "saxAlt/D2di.mp3"	, position: -130  },
  { name: "D2"	, frequency:  43.65 ,	mp3: "saxAlt/D2.mp3"	, position: -130  },
  { name: "Db2"	, frequency:  41.20 ,	mp3: "saxAlt/C2di.mp3"	, position: -130  },
  { name: "C#2"	, frequency:  41.20 ,	mp3: "saxAlt/C2di.mp3"	, position: -140  },
  { name: "C2"	, frequency:  38.89 ,	mp3: "saxAlt/C2.mp3"	, position: -140  },
  { name: "H1"	, frequency:  36.71 ,	mp3: "saxAlt/B1.mp3"	, position: -150  },
  { name: "B1"	, frequency:  34.65 ,	mp3: "saxAlt/A1di.mp3"	, position: -150  },
  { name: "A#1"	, frequency:  34.65 ,	mp3: "saxAlt/A1di.mp3"	, position: -160  },
  { name: "A1"	, frequency:  32.70 ,	mp3: "saxAlt/A1.mp3"	, position: -160  },
  { name: "Ab1"	, frequency:  30.87 ,	mp3: "saxAlt/G1di.mp3"	, position: -160  },
  { name: "G#1"	, frequency:  30.87 ,	mp3: "saxAlt/G1di.mp3"	, position: -170  },
  { name: "G1"	, frequency:  29.14 ,	mp3: "saxAlt/G1.mp3"	, position: -170  },
  { name: "Gb1"	, frequency:  27.50 ,	mp3: "saxAlt/F1di.mp3"	, position: -170  },
  { name: "F#1"	, frequency:  27.50 ,	mp3: "saxAlt/F1di.mp3"	, position: -180  },
  { name: "F1"	, frequency:  25.96 ,	mp3: "saxAlt/F1.mp3"	, position: -180  },
  { name: "E1"	, frequency:  24.50 ,	mp3: "saxAlt/E1.mp3"	, position: -190  },
  { name: "Eb1"	, frequency:  23.13 ,	mp3: "saxAlt/D1di.mp3"	, position: -190  },
  { name: "D#1"	, frequency:  23.13 ,	mp3: "saxAlt/D1di.mp3"	, position: -200  },
  { name: "D1"	, frequency:  21.83 ,	mp3: "saxAlt/D1.mp3"	, position: -200  },
  { name: "Db1"	, frequency:  20.60 ,	mp3: "saxAlt/C1di.mp3"	, position: -200  },
  { name: "C#1"	, frequency:  20.60 ,	mp3: "saxAlt/C1di.mp3"	, position: -210  },
  { name: "C1"	, frequency:  19.45 ,	mp3: "saxAlt/C1.mp3"	, position: -210  }
];			   
const allNotes_sax_tenor = [			
  { name: "C7", frequency: 932.33, mp3: "saxTenor/C7.mp3", position: 210 },
  { name: "H6", frequency: 880.00, mp3: "saxTenor/B6.mp3", position: 200 },
  { name: "B6", frequency: 830.61, mp3: "saxTenor/A6di.mp3", position: 200 },
  { name: "A#6", frequency: 830.61, mp3: "saxTenor/A6di.mp3", position: 190 },
  { name: "A6", frequency: 783.99, mp3: "saxTenor/A6.mp3", position: 190 },
  { name: "Ab6", frequency: 739.99, mp3: "saxTenor/G6di.mp3", position: 190 },
  { name: "G#6", frequency: 739.99, mp3: "saxTenor/G6di.mp3", position: 180 },
  { name: "G6", frequency: 698.46, mp3: "saxTenor/G6.mp3", position: 180 },
  { name: "Gb6", frequency: 659.25, mp3: "saxTenor/F6di.mp3", position: 180 },
  { name: "F#6", frequency: 659.25, mp3: "saxTenor/F6di.mp3", position: 170 },
  { name: "F6", frequency: 622.25, mp3: "saxTenor/F6.mp3", position: 170 },
  { name: "E6", frequency: 587.33, mp3: "saxTenor/E6.mp3", position: 160 },
  { name: "Eb6", frequency: 554.37, mp3: "saxTenor/D6di.mp3", position: 160 },
  { name: "D#6", frequency: 554.37, mp3: "saxTenor/D6di.mp3", position: 150 },
  { name: "D6", frequency: 523.25, mp3: "saxTenor/D6.mp3", position: 150 },
  { name: "Db6", frequency: 493.88, mp3: "saxTenor/C6di.mp3", position: 150 },
  { name: "C#6", frequency: 493.88, mp3: "saxTenor/C6di.mp3", position: 140 },
  { name: "C6", frequency: 466.16, mp3: "saxTenor/C6.mp3", position: 140 },
  { name: "H5", frequency: 440.00, mp3: "saxTenor/B5.mp3", position: 130 },
  { name: "B5", frequency: 415.30, mp3: "saxTenor/A5di.mp3", position: 130 },
  { name: "A#5", frequency: 415.30, mp3: "saxTenor/A5di.mp3", position: 120 },
  { name: "A5", frequency: 392.00, mp3: "saxTenor/A5.mp3", position: 120 },
  { name: "Ab5", frequency: 369.99, mp3: "saxTenor/G5di.mp3", position: 120 },
  { name: "G#5", frequency: 369.99, mp3: "saxTenor/G5di.mp3", position: 110 },
  { name: "G5", frequency: 349.23, mp3: "saxTenor/G5.mp3", position: 110 },
  { name: "Gb5", frequency: 329.63, mp3: "saxTenor/F5di.mp3", position: 110 },
  { name: "F#5", frequency: 329.63, mp3: "saxTenor/F5di.mp3", position: 100 },
  { name: "F5", frequency: 311.13, mp3: "saxTenor/F5.mp3", position: 100 },
  { name: "E5", frequency: 293.66, mp3: "saxTenor/E5.mp3", position: 90 },
  { name: "Eb5", frequency: 277.18, mp3: "saxTenor/D5di.mp3", position: 90 },
  { name: "D#5", frequency: 277.18, mp3: "saxTenor/D5di.mp3", position: 80 },
  { name: "D5", frequency: 261.63, mp3: "saxTenor/D5.mp3", position: 80 },
  { name: "Db5", frequency: 246.94, mp3: "saxTenor/C5di.mp3", position: 80 },
  { name: "C#5", frequency: 246.94, mp3: "saxTenor/C5di.mp3", position: 70 },
  { name: "C5", frequency: 233.08, mp3: "saxTenor/C5.mp3", position: 70 },
  { name: "H4", frequency: 220.00, mp3: "saxTenor/B4.mp3", position: 60 },
  { name: "B4", frequency: 207.65, mp3: "saxTenor/A4di.mp3", position: 60 },
  { name: "A#4", frequency: 207.65, mp3: "saxTenor/A4di.mp3", position: 50 },
  { name: "A4", frequency: 196.00, mp3: "saxTenor/A4.mp3", position: 50 },
  { name: "Ab4", frequency: 185.00, mp3: "saxTenor/G4di.mp3", position: 50 },
  { name: "G#4", frequency: 185.00, mp3: "saxTenor/G4di.mp3", position: 40 },
  { name: "G4", frequency: 174.61, mp3: "saxTenor/G4.mp3", position: 40 },
  { name: "Gb4", frequency: 164.81, mp3: "saxTenor/F4di.mp3", position: 40 },
  { name: "F#4", frequency: 164.81, mp3: "saxTenor/F4di.mp3", position: 30 },
  { name: "F4", frequency: 155.56, mp3: "saxTenor/F4.mp3", position: 30 },
  { name: "E4", frequency: 146.83, mp3: "saxTenor/E4.mp3", position: 20 },
  { name: "Eb4", frequency: 138.59, mp3: "saxTenor/D4di.mp3", position: 20 },
  { name: "D#4", frequency: 138.59, mp3: "saxTenor/D4di.mp3", position: 10 },
  { name: "D4", frequency: 130.81, mp3: "saxTenor/D4.mp3", position: 10 },
  { name: "Db4", frequency: 123.47, mp3: "saxTenor/C4di.mp3", position: 10 },
  { name: "C#4", frequency: 123.47, mp3: "saxTenor/C4di.mp3", position: 0 },
  { name: "C4", frequency: 116.54, mp3: "saxTenor/C4.mp3", position: 0 },
  { name: "H3", frequency: 110.00, mp3: "saxTenor/B3.mp3", position: -10 },
  { name: "B3", frequency: 103.83, mp3: "saxTenor/A3di.mp3", position: -10 },
  { name: "A#3", frequency: 103.83, mp3: "saxTenor/A3di.mp3", position: -20 },
  { name: "A3", frequency: 98.00, mp3: "saxTenor/A3.mp3", position: -20 },
  { name: "Ab3", frequency: 92.50, mp3: "saxTenor/G3di.mp3", position: -20 },
  { name: "G#3", frequency: 92.50, mp3: "saxTenor/G3di.mp3", position: -30 },
  { name: "G3", frequency: 87.31, mp3: "saxTenor/G3.mp3", position: -30 },
  { name: "Gb3", frequency: 82.41, mp3: "saxTenor/F3di.mp3", position: -30 },
  { name: "F#3", frequency: 82.41, mp3: "saxTenor/F3di.mp3", position: -40 },
  { name: "F3", frequency: 77.78, mp3: "saxTenor/F3.mp3", position: -40 },
  { name: "E3", frequency: 73.42, mp3: "saxTenor/E3.mp3", position: -50 },
  { name: "Eb3", frequency: 69.30, mp3: "saxTenor/D3di.mp3", position: -50 },
  { name: "D#3", frequency: 69.30, mp3: "saxTenor/D3di.mp3", position: -60 },
  { name: "D3", frequency: 65.41, mp3: "saxTenor/D3.mp3", position: -60 },
  { name: "Db3", frequency: 61.74, mp3: "saxTenor/C3di.mp3", position: -60 },
  { name: "C#3", frequency: 61.74, mp3: "saxTenor/C3di.mp3", position: -70 },
  { name: "C3", frequency: 58.27, mp3: "saxTenor/C3.mp3", position: -70 },
  { name: "H2", frequency: 55.00, mp3: "saxTenor/B2.mp3", position: -80 },
  { name: "B2", frequency: 51.91, mp3: "saxTenor/A2di.mp3", position: -80 },
  { name: "A#2", frequency: 51.91, mp3: "saxTenor/A2di.mp3", position: -90 },
  { name: "A2", frequency: 49.00, mp3: "saxTenor/A2.mp3", position: -90 },
  { name: "Ab2", frequency: 46.25, mp3: "saxTenor/G2di.mp3", position: -90 },
  { name: "G#2", frequency: 46.25, mp3: "saxTenor/G2di.mp3", position: -100 },
  { name: "G2", frequency: 43.65, mp3: "saxTenor/G2.mp3", position: -100 },
  { name: "Gb2", frequency: 41.20, mp3: "saxTenor/F2di.mp3", position: -100 },
  { name: "F#2", frequency: 41.20, mp3: "saxTenor/F2di.mp3", position: -110 },
  { name: "F2", frequency: 38.89, mp3: "saxTenor/F2.mp3", position: -110 },
  { name: "E2", frequency: 36.71, mp3: "saxTenor/E2.mp3", position: -120 },
  { name: "Eb2", frequency: 34.65, mp3: "saxTenor/D2di.mp3", position: -120 },
  { name: "D#2", frequency: 34.65, mp3: "saxTenor/D2di.mp3", position: -130 },
  { name: "D2", frequency: 32.70, mp3: "saxTenor/D2.mp3", position: -130 },
  { name: "Db2", frequency: 30.87, mp3: "saxTenor/C2di.mp3", position: -130 },
  { name: "C#2", frequency: 30.87, mp3: "saxTenor/C2di.mp3", position: -140 },
  { name: "C2", frequency: 29.14, mp3: "saxTenor/C2.mp3", position: -140 },
  { name: "H1", frequency: 27.50, mp3: "saxTenor/B1.mp3", position: -150 },
  { name: "B1", frequency: 25.96, mp3: "saxTenor/A1di.mp3", position: -150 },
  { name: "A#1", frequency: 25.96, mp3: "saxTenor/A1di.mp3", position: -160 },
  { name: "A1", frequency: 24.50, mp3: "saxTenor/A1.mp3", position: -160 },
  { name: "Ab1", frequency: 23.13, mp3: "saxTenor/G1di.mp3", position: -160 },
  { name: "G#1", frequency: 23.13, mp3: "saxTenor/G1di.mp3", position: -170 },
  { name: "G1", frequency: 21.83, mp3: "saxTenor/G1.mp3", position: -170 },
  { name: "Gb1", frequency: 20.60, mp3: "saxTenor/F1di.mp3", position: -170 },
  { name: "F#1", frequency: 20.60, mp3: "saxTenor/F1di.mp3", position: -180 },
  { name: "F1", frequency: 19.45, mp3: "saxTenor/F1.mp3", position: -180 },
  { name: "E1", frequency: 18.36, mp3: "saxTenor/E1.mp3", position: -190 },
  { name: "Eb1", frequency: 17.33, mp3: "saxTenor/D1di.mp3", position: -190 },
  { name: "D#1", frequency: 17.33, mp3: "saxTenor/D1di.mp3", position: -200 },
  { name: "D1", frequency: 16.35, mp3: "saxTenor/D1.mp3", position: -200 },
  { name: "Db1", frequency: 15.44, mp3: "saxTenor/C1di.mp3", position: -200 },
  { name: "C#1", frequency: 15.44, mp3: "saxTenor/C1di.mp3", position: -210 },
  { name: "C1", frequency: 14.57, mp3: "saxTenor/C1.mp3", position: -210 }
];

/*--------- Last Settings  --------------------------*/
// Load saved options from localStorage
function loadOptions() {
  showNoteNameCheckbox.checked = JSON.parse(localStorage.getItem("showNoteNameCheckbox")) || false;
  playNoteCheckbox.checked = JSON.parse(localStorage.getItem("playNoteCheckbox")) || false;
  useBassClefCheckbox.checked = JSON.parse(localStorage.getItem("useBassClefCheckbox")) || false;
  showSummaryCheckbox.checked = JSON.parse(localStorage.getItem("showSummaryCheckbox")) || false;
  pauseInput.value = localStorage.getItem("pauseInput") || "500";
  toleranceInput.value = localStorage.getItem("toleranceInput") || "5";
  const selectedInstrument = localStorage.getItem("selectedInstrument") || "saxTenor";
  document.querySelector(`input[name="instrument"][value="${selectedInstrument}"]`).checked = true;
  const selectedNoteRange = localStorage.getItem("selectedNoteRange") || "small";
  document.querySelector(`input[name="noteRange"][value="${selectedNoteRange}"]`).checked = true;
  showSharpCheckbox.checked = JSON.parse(localStorage.getItem("showSharpCheckbox")) || false;
  showFlatCheckbox.checked = JSON.parse(localStorage.getItem("showFlatCheckbox")) || false;
  noteFilterCheckbox.checked = JSON.parse(localStorage.getItem("noteFilterCheckbox")) || false;
  noteFilterInput.value = localStorage.getItem("noteFilterInput") || "C D E F G A H";
  noteFilterInput.disabled = !noteFilterCheckbox.checked;
  updateInstrument();
}

// Save options to localStorage
function saveOptions() {
  localStorage.setItem("showNoteNameCheckbox", JSON.stringify(showNoteNameCheckbox.checked));
  localStorage.setItem("playNoteCheckbox", JSON.stringify(playNoteCheckbox.checked));
  localStorage.setItem("useBassClefCheckbox", JSON.stringify(useBassClefCheckbox.checked));
  localStorage.setItem("showSummaryCheckbox", JSON.stringify(showSummaryCheckbox.checked));
  localStorage.setItem("pauseInput", pauseInput.value);
  localStorage.setItem("toleranceInput", toleranceInput.value);
  localStorage.setItem("selectedInstrument", document.querySelector('input[name="instrument"]:checked').value);
  localStorage.setItem("selectedNoteRange", document.querySelector('input[name="noteRange"]:checked').value);
  localStorage.setItem("showSharpCheckbox", JSON.stringify(showSharpCheckbox.checked));
  localStorage.setItem("showFlatCheckbox", JSON.stringify(showFlatCheckbox.checked));
  localStorage.setItem("noteFilterCheckbox", JSON.stringify(noteFilterCheckbox.checked));
  localStorage.setItem("noteFilterInput", noteFilterInput.value);
}
      
const noteContainer = document.getElementById("noteContainer");
const noteElement = document.getElementById("note");
const clefTrebleElement = document.getElementById("clefTreble");
const clefBassElement = document.getElementById("clefBass");
const sharpElement = document.getElementById("sharp");
const flatElement = document.getElementById("flat");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const noteNameElement = document.getElementById("noteName");
const showNoteNameCheckbox = document.getElementById("showNoteNameCheckbox");
const playNoteCheckbox = document.getElementById("playNoteCheckbox");
const useBassClefCheckbox = document.getElementById("useBassClefCheckbox");
const showSummaryCheckbox = document.getElementById("showSummaryCheckbox");
const pauseInput = document.getElementById("pauseInput");
const toleranceInput = document.getElementById("toleranceInput");
const instrumentSaxTenorRadio = document.getElementById("instrumentSaxTenorRadio");
const instrumentSaxAltRadio = document.getElementById("instrumentSaxAltRadio");
const instrumentRegularRadio = document.getElementById("instrumentRegularRadio");
const smallRangeRadio = document.getElementById("smallRangeRadio");
const middleRangeRadio = document.getElementById("middleRangeRadio");
const largeRangeRadio = document.getElementById("largeRangeRadio");
const noteFilterCheckbox = document.getElementById("noteFilterCheckbox");    
const noteFilterInput = document.getElementById("noteFilterInput");  
const showSharpCheckbox = document.getElementById("showSharpCheckbox");
const showFlatCheckbox = document.getElementById("showFlatCheckbox");
const noteEllipse = document.getElementById("noteEllipse");
const burgerMenu = document.getElementById('burgerMenu');
const optionContainer = document.getElementById('optionContainer');
const instrumentImage = document.getElementById('instrumentImage');
const instrumentName = document.getElementById('instrumentName');
const instruction = document.getElementById('instruction'); 

let currentNote = null;
let audioContext = null;
let model;
let pause;
let tolerance;

//--------------- EVENT LISTENERS ------------------------------
showNoteNameCheckbox.addEventListener('change', () => {
  noteNameElement.textContent = showNoteNameCheckbox.checked && currentNote ? currentNote.name : '';
  saveOptions();
});
playNoteCheckbox.addEventListener('change', () => {
  saveOptions(); 
  if(playNoteCheckbox.checked && currentNote){playMp3(currentNote);}
});
useBassClefCheckbox.addEventListener('change', () => {
  saveOptions(); 
  displayNote(currentNote);
});   
showSummaryCheckbox.addEventListener('change', () => { saveOptions(); });
pauseInput.addEventListener('change', () => { saveOptions(); pause = Math.round(pauseInput.value); });
toleranceInput.addEventListener('change', () => { saveOptions(); tolerance = Math.round(toleranceInput.value); });
instrumentSaxTenorRadio.addEventListener('change', () => { initNoteSatistics(); updateInstrument(); saveOptions(); nextNote();});
instrumentSaxAltRadio.addEventListener('change', () => { initNoteSatistics(); updateInstrument(); saveOptions(); nextNote();});
instrumentRegularRadio.addEventListener('change', () => { initNoteSatistics(); updateInstrument(); saveOptions(); nextNote();});
showSharpCheckbox.addEventListener('change', () => { saveOptions(); nextNote(); });
showFlatCheckbox.addEventListener('change', () => { saveOptions(); nextNote(); });
smallRangeRadio.addEventListener('change', () => { saveOptions(); nextNote(); });
middleRangeRadio.addEventListener('change', () => { saveOptions(); nextNote(); });
largeRangeRadio.addEventListener('change', () => { saveOptions(); nextNote(); });
noteFilterCheckbox.addEventListener('change', () => { noteFilterInput.disabled = !noteFilterCheckbox.checked; saveOptions(); nextNote();}); 
noteFilterInput.addEventListener('change', () => { saveOptions(); }); 
burgerMenu.addEventListener('click', () => {optionContainer.classList.toggle('active');});
document.addEventListener('click', (event) => { //close option dialog if clicked outside
  if (!optionContainer.contains(event.target) && !burgerMenu.contains(event.target)) {
    optionContainer.classList.remove('active');
  }
});
startButton.addEventListener("click", () => {startToneDetection(); });
stopButton.addEventListener("click", () => {
  stopToneDetection();
  handleButtons();
  if(showSummaryCheckbox.checked){
    showSummary();
  } else {
    location.reload();
  }
});

function setOptionEnableState(state){
  showNoteNameCheckbox.disabled = !state;
  playNoteCheckbox.disabled = !state;
  useBassClefCheckbox.disabled = !state;
  showSummaryCheckbox.disabled = !state;
  toleranceInput.disabled = !state;
  pauseInput.disabled = !state;
  instrumentSaxTenorRadio.disabled = !state;
  instrumentSaxAltRadio.disabled = !state;
  instrumentRegularRadio.disabled = !state;
  smallRangeRadio.disabled = !state;
  middleRangeRadio.disabled = !state;
  largeRangeRadio.disabled = !state;
  showSharpCheckbox.disabled = !state;
  showFlatCheckbox.disabled = !state;
  noteFilterCheckbox.disabled = !state;
}

function handleButtons(){
  if(!running){
    startButton.textContent = "Weiter"; // Change button text to "Weiter"
    startButton.style.backgroundColor = "gray"; // Change button color to gray
    stopButton.style.display = "block";
  } else {
    startButton.textContent = "Start"; // Change button text to "Weiter"
    startButton.style.backgroundColor = "green"; // Change button color to gray
    stopButton.style.display = "none";
  }  
}

function updateInstrument() {
  if (instrumentSaxTenorRadio.checked) {
    instrumentImage.src = 'images/saxTenor.png';
    instrumentName.textContent = 'Tenor Saxophon';
  } else if (instrumentSaxAltRadio.checked) {
    instrumentImage.src = 'images/saxAlt.png';
    instrumentName.textContent = 'Alt Saxophon';
  } else {
    instrumentImage.src = 'images/piano.png';
    instrumentName.textContent = 'Klavier';
  }
  instrumentImage.style.visibility = 'visible'; 
  instrumentImage.style.opacity = '1';
  instruction.style.visibility = 'visible'; 
  instruction.style.opacity = '1';
}

function error(text) {
  document.getElementById('status').innerHTML = '<span class="message-red">Error: ' + text + '</span>';
  return text;
}

function status(text) {
  document.getElementById('status').innerHTML = text;
}

//--------------- NOTE SELECTION ------------------------------
var noteStatistics = {};

function initNoteSatistics() {
  let notes = getSelectedNotes();
  noteStatistics = {}; //reset 
  notes.forEach(note => {
    noteStatistics[note.name] = { correct: 0, incorrect: 0 };
  });
}

function getSelectedNotes() {
  let notes;
  if (instrumentSaxTenorRadio.checked) {
    notes = allNotes_sax_tenor;
  } else if (instrumentSaxAltRadio.checked) {
    notes = allNotes_sax_alt;
  } else {
    notes = allNotes_regular;
  }  
  return notes;
}

// Filter notes and select a random note from this list
function getNextNote() {
  //pick notes based on instrument (different tuning)
  let notes = getSelectedNotes();
  //Filter notes
  if (smallRangeRadio.checked) {
    notes = notes.filter(note => note.position >= 0 && note.position <= 70);
  } else if (middleRangeRadio.checked) {
    notes = notes.filter(note => note.position >= 0 && note.position <= 140);
  } else if (largeRangeRadio.checked) {
    notes = notes.filter(note => note.position >= -70 && note.position <= 210);
  }
  if (!showSharpCheckbox.checked) {
    notes = notes.filter(note => !note.name.includes('#'));
  }
  if (!showFlatCheckbox.checked) {
    notes = notes.filter(note => !note.name.includes('b'));
  }
  if(noteFilterCheckbox.checked){
    const noteFilter = noteFilterInput.value.split(' ').map(n => n.trim()).filter(n => n);
    if (noteFilter.length > 0) {
      const regex = new RegExp(noteFilter.join('|'), 'i');
      notes = notes.filter(note => regex.test(note.name));
    }
  }
  if(currentNote && notes.length > 1){notes = notes.filter(note => !note.name.includes(currentNote.name));} //don't use the same note
  const weightedNotes = getWeightedNotes(notes);
  //Randomize result
  return weightedNotes[Math.floor(Math.random() * weightedNotes.length)];
}

// Increase the probability of incorrect notes
function getWeightedNotes(notes){
    const weightedNotes = [];
    notes.forEach(note => {
      const incorrectCount = noteStatistics[note.name].incorrect;
      for (let i = 0; i <= incorrectCount; i++) {
        weightedNotes.push(note);
      }
    });
  return weightedNotes;  
}

// Show the next note
function nextNote() {
  blocking = false; //reset
  noteEllipse.setAttribute("fill", "black"); // Reset note color after delay
  currentNote = getNextNote();
  displayNote(currentNote);
  noteContainer.className = "staff"; // Reset staff color
}

//--------------- NOTE DRAWING ------------------------------
let clefSwitchPosition = 0; //threshold to switch between treble and bass clef based on position of note
let offset_global = -60; //using svg for flat and sharp somehow requires a different handling. Used in drawAccidental

// Display the note on the staff
function displayNote(note) {
  drawClef(note);
  drawNote(note);
  drawLedgerLines(note);
  drawNoteName(note);
  drawAccidental(note);
  if(playNoteCheckbox.checked){playMp3(note);}
//  setStemDirection(note.position);
}

function drawClef(note){
  if((note.position < clefSwitchPosition) && useBassClefCheckbox.checked){
    clefTrebleElement.style.display = "none";
    clefBassElement.style.display = "block";
  } else {
    clefTrebleElement.style.display = "block";
    clefBassElement.style.display = "none";
  }
}

function drawNote(note){
  noteElement.style.display = 'block'; // Show the note
  const offset = (note.position < clefSwitchPosition) && useBassClefCheckbox.checked ? 120 : 0;
  noteElement.style.bottom = `${note.position+offset+offset_global}px`; // Position dynamically
}

function drawNoteName(note){
  noteNameElement.textContent = showNoteNameCheckbox.checked ? note.name : ''; // Display or hide note name
}

function drawAccidental(note){ //Vorzeichen
  const offset = (note.position < clefSwitchPosition) && useBassClefCheckbox.checked ? 120 : 0;
  sharpElement.style.display = 'none'; //hide 
  flatElement.style.display = 'none'; //hide
  if (note.name.includes('#')) {
    sharpElement.style.display = 'block'; 
    sharpElement.style.top = `${-(note.position + offset + offset_global -47)}px`; // Adjust position for accidental
  } else if (note.name.includes('b')) {
    flatElement.style.display = 'block';
    flatElement.style.top = `${-(note.position + offset + offset_global - 40)}px`; // Adjust position for accidental
  }        
}

// Draw ledger lines for notes outside the staff
function drawLedgerLines(note) {
  const ledgerLines = document.querySelectorAll('.ledger-line');
  ledgerLines.forEach(line => line.remove());
  const offset = (note.position < clefSwitchPosition) && useBassClefCheckbox.checked ? 120 : 0;
  const position = note.position + offset;
  if (position > 100 || position < 10) {
    const numLines = position > 100 ? Math.abs(Math.ceil((100-position) / 20)) : Math.abs(Math.ceil(position / 20))+1;
    for (let i = 0; i < numLines; i++) {
      const line = document.createElement('div');
      line.className = 'ledger-line';
      line.style.bottom = `${(position > 100 ? offset_global + 140 + (i * 20) : offset_global + 20 - (i * 20)) - 2}px`;
      noteContainer.appendChild(line);
    }
  }
}

// Set the direction of the note stem (not used here)
function setStemDirection(position) {
  const stem = noteElement.querySelector('.stem');
  if (position > 50) {
    stem.setAttribute('y', '0');
    noteElement.classList.add('down');
    noteElement.classList.remove('up');
  } else {
    stem.setAttribute('y', '20');
    noteElement.classList.add('up');
    noteElement.classList.remove('down');
  }
}

var blocking = false; //used to correctly handle pause
// Highlight the staff depending on correctness (not used here)
function highlightNote(correct) {
  noteEllipse.setAttribute("fill", correct ? "green" : "red");
  setTimeout(() => {
    if (correct && !blocking) {
      blocking = true;
      setTimeout(nextNote, pause||500); // Delay before showing the next note
    }
  }, pause||500); // Delay duration
}

/*--------- Audio OUTPUT --------------------------*/
// Play the note using Web Audio API

let currentOscillator = null; 
function playTone(note) {
  if (currentOscillator) {
    currentOscillator.stop();
    currentOscillator = null;
  }
  oscillator = audioContext.createOscillator();
  oscillator.type = 'sawtooth'; // You can change the type to 'square', 'sine', 'sawtooth', 'triangle'
  oscillator.frequency.setValueAtTime(note.frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1); // Play the note for 1 second
  currentOscillator = oscillator; // Update the current oscillator
}

let currentSource = null; // Variable to keep track of the currently playing source
async function playMp3(note) {
  try {
    if (currentSource) {currentSource.stop(); currentSource = null;} // Stop the currently playing source if it exists
    const audioBuffer = await loadMp3(note);
    if (!audioBuffer) {
      throw new Error('AudioBuffer is null or undefined');
    }
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    // Add an event listener for the 'ended' event
    source.onended = () => {currentSource = null;};
    currentSource = source; // Update the current source
  } catch (error) {
    console.error('Error playing MP3:', error);
  }
}

// Load the audio file for the given note (can only be used with WebServer!)
async function loadMp3(note) {
  try {
    const response = await fetch("audio/" + note.mp3);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
  } catch (error) {
    playTone(note); //fallback to oscillator if mp3 is not defined
    console.error('Error loading MP3:', error);
    return null;
  }
}

/*----------------------- TONE DETECTION with neuronal network -------------------------------*/
//Based on https://github.com/marl/crepe
var confidenceRequested = 0.8

function startToneDetection(){
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  loadModel().then(() => {
    if(!running){
      initAudio();
      initNoteSatistics();
      handleButtons();
    }
    blocking = false; //reset
    nextNote();
    setOptionEnableState(true); //no longer in use
    saveOptions();
    tolerance = Math.round(toleranceInput.value);
    pause = Math.round(pauseInput.innerText);
  });
}

function stopToneDetection() {
  running = false;
  // Stop any ongoing audio processing or event listeners here
  if (audioContext && audioContext.state !== 'closed') {
    audioContext.close();
  }
}

function initAudio() {
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        handleAudio(stream);
      })
      .catch(function(err) {
        error('Auf Mikrofon kann nicht zugegriffen werden - ' + err);
      });
  } else if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: true },
      function(stream) {
        handleAudio(stream);
      },
      function(err) {
        error('Auf Mikrofon kann nicht zugegriffen werden - ' + err);
      });
  } else {
    error('getUserMedia wird von diesem Browser nicht unterstützt. Bitte benutzen sie Chrome oder Firefox.');
  }
}

function handleAudio(stream){
  status('Aktiviere Mikrofon und initialisiere Notenerkennung...');
  console.log('Audio context sample rate = ' + audioContext.sampleRate);
  const mic = audioContext.createMediaStreamSource(stream);
  // We need the buffer size that is a power of two and is longer than 1024 samples when resampled to 16000 Hz.
  // In most platforms where the sample rate is 44.1 kHz or 48 kHz, this will be 4096, giving 10-12 updates/sec.
  const minBufferSize = audioContext.sampleRate / 16000 * 1024;
  for (var bufferSize = 4; bufferSize < minBufferSize; bufferSize *= 2);
  console.log('Buffer size = ' + bufferSize);
  const scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
  scriptNode.onaudioprocess = process_microphone_buffer;
  // It seems necessary to connect the stream to a sink for the pipeline to work, contrary to documentataions.
  // As a workaround, here we create a gain node with zero gain, and connect temp to the system audio output.
  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0, audioContext.currentTime);
  mic.connect(scriptNode);
  scriptNode.connect(gain);
  gain.connect(audioContext.destination);
  if (audioContext.state === 'running') {
    status('Starte Notenerkennung...');
  }
}

async function loadModel() {
  if(!running){
    status('Lade Modell...');
    model = await tf.loadModel('https://marl.github.io/crepe/model/model.json');
    status('Modell geladen');
  }
}

var running = false;

// bin number -> cent value mapping
const cent_mapping = tf.add(tf.linspace(0, 7180, 360), tf.tensor(1997.3794084376191))

function process_microphone_buffer(event) {
  resample(event.inputBuffer, function(resampled) {
    tf.tidy(() => {
      running = true;
      // run the prediction on the model
      const frame = tf.tensor(resampled.slice(0, 1024));
      const zeromean = tf.sub(frame, tf.mean(frame));
      const framestd = tf.tensor(tf.norm(zeromean).dataSync()/Math.sqrt(1024));
      const normalized = tf.div(zeromean, framestd);
      const input = normalized.reshape([1, 1024]);
      const activation = model.predict([input]).reshape([360]);
      // the confidence of voicing activity and the argmax bin
      const confidence = activation.max().dataSync()[0];
      const center = activation.argMax().dataSync()[0];
      // slice the local neighborhood around the argmax bin
      const start = Math.max(0, center - 4);
      const end = Math.min(360, center + 5);
      const weights = activation.slice([start], [end - start]);
      const cents = cent_mapping.slice([start], [end - start]);
      // take the local weighted average to get the predicted pitch
      const products = tf.mul(weights, cents);
      const productSum = products.dataSync().reduce((a, b) => a + b, 0);
      const weightSum = weights.dataSync().reduce((a, b) => a + b, 0);
      const predicted_cent = productSum / weightSum;
      const predicted_hz = 10 * Math.pow(2, predicted_cent / 1200.0);
      //check if the detected note matches to the requested note 
      checkNote((confidence > confidenceRequested) ? predicted_hz : null);
    });
  });
}

// perform resampling the audio to 16000 Hz, on which the model is trained.
// setting a sample rate in AudioContext is not supported by most browsers at the moment.
function resample(audioBuffer, onComplete) {
  const interpolate = (audioBuffer.sampleRate % 16000 != 0);
  const multiplier = audioBuffer.sampleRate / 16000;
  const original = audioBuffer.getChannelData(0);
  const subsamples = new Float32Array(1024);
  for (var i = 0; i < 1024; i++) {
    if (!interpolate) {
      subsamples[i] = original[i * multiplier];
    } else {
      // simplistic, linear resampling
      var left = Math.floor(i * multiplier);
      var right = left + 1;
      var p = i * multiplier - left;
      subsamples[i] = (1 - p) * original[left] + p * original[right];
    }
  }
  onComplete(subsamples);
}

/*----------------------- TONE CHECKING -------------------------------*/
function checkNote(pitch){
  if(!blocking && currentNote){
    if (pitch) {
      status("Tonhöhe: " + Math.round(pitch) + " Hz, Ziel: " + Math.round(currentNote.frequency) + " Hz");
      const targetFrequency = currentNote.frequency;
      const correct = Math.abs(targetFrequency - pitch) < tolerance; // Allow small tolerance
      if(correct){
        noteStatistics[currentNote.name].correct++;
      } else {
        noteStatistics[currentNote.name].incorrect++;
      }
      highlightNote(correct);
    } else {
      status("Tonhöhe: <span class='message-red'>Spiele den angegebenen Ton</span>, Ziel: " + Math.round(currentNote.frequency) + " Hz");
    }
  }
}

/*----------------------- STATISTICS -------------------------------*/
// Function to show the pop-up dialog with the pie chart
function showSummary() {
  const correctNotes = Object.values(noteStatistics).reduce((sum, stats) => sum + stats.correct, 0);
  const incorrectNotes = Object.values(noteStatistics).reduce((sum, stats) => sum + stats.incorrect, 0);
  // Check if there are any correct or incorrect notes
  if (correctNotes === 0 && incorrectNotes === 0) {
    location.reload();
    return; // Do not show the dialog if there are no notes
  }
  const data = [
    { label: 'Correct', value: correctNotes },
    { label: 'Incorrect', value: incorrectNotes }
  ];
  const chartContainer = document.getElementById('chartContainer');
  chartContainer.innerHTML = ''; // Clear previous chart
  const canvas = document.createElement('canvas');
  chartContainer.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;
  data.forEach(item => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(100, 75); // Center of the pie chart
    ctx.arc(100, 75, 75, startAngle, startAngle + sliceAngle);
    startAngle += sliceAngle;
    ctx.closePath();
    ctx.fillStyle = item.label === 'Correct' ? 'green' : 'red';
    ctx.fill();
  });
  // Create ranked list of incorrectly played notes
  const rankedListContainer = document.getElementById('rankedListContainer');
  rankedListContainer.innerHTML = ''; // Clear previous list
  const rankedList = document.createElement('ul');
  const sortedNotes = Object.entries(noteStatistics)
    .filter(([name, stats]) => stats.incorrect > 0)
    .sort((a, b) => b[1].incorrect - a[1].incorrect);
  sortedNotes.forEach(([name, stats]) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${name}`;
    rankedList.appendChild(listItem);
  });
  rankedListContainer.appendChild(rankedList);
  document.getElementById('statisticsDialog').style.display = 'block';
}

// Event listener for the close button
document.getElementById('closeButton').addEventListener('click', () => {
  document.getElementById('statisticsDialog').style.display = 'none';
  location.reload();
});
