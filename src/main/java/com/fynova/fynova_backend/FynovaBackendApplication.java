package com.fynova.fynova_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FynovaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FynovaBackendApplication.class, args);
	}

}
/* 
#package com.fynova.fynova_backend; Diese Zeile gibt an, in welchem Paket sich die Java-Datei befindet.
Das Paket bestimmt die Organisation und Struktur des Projekts. Dies hilft, 
Klassen und andere Komponenten in geordneter Weise zu organisieren.
#import org.springframework.boot.SpringApplication; Diese Zeile importiert die SpringApplication-Klasse. 
SpringApplication ist eine Klasse, die zur Initialisierung von Spring Boot-Anwendungen verwendet wird.
#import org.springframework.boot.autoconfigure.SpringBootApplication; Diese Zeile importiert die SpringBootApplication-Anotation.
Diese Annotation definiert die Basisklasse Ihrer Spring Boot-Anwendung und ermöglicht die Autokonfiguration, 
das Scannen von Komponenten und andere wichtige Funktionen.
#@SpringBootApplication: Dies ist eine Annotation und kombiniert drei wichtige Eigenschaften:
@Configuration: Zeigt an, dass diese Klasse eine Konfigurationsklasse ist.
@EnableAutoConfiguration: Aktiviert die automatische Konfigurationsfunktion von Spring Boot.
Dadurch werden die Komponenten, die Ihre Anwendung benötigt, automatisch konfiguriert.
@ComponentScan: Scannt die Komponenten Ihrer Anwendung (z. B. Klassen, die mit Annotationen wie @Service, @Repository, @Controller gekennzeichnet sind) 
und fügt sie dem Spring-Container hinzu.
public class FynovaBackendApplication: Diese Zeile definiert eine Klasse namens FynovaBackendApplication. Diese Klasse ist der Einstiegspunkt für diese Anwendung. 
Public zeigt es an, dass diese Klasse für andere Klassen zugänglich ist.
#public static void main(String[] args): Dies definiert die main-Methode, die der Einstiegspunkt für Java-Anwendungen ist. 
Das Schlüsselwort public zeigt an, dass diese Methode für andere Klassen zugänglich ist. 
Das Schlüsselwort static zeigt an, dass diese Methode aufgerufen werden kann, ohne eine Instanz der Klasse zu erzeugen. 
String[] args steht für Argumente, die über die Befehlszeile übergeben werden. 
#SpringApplication.run(FynovaBackendApplication.class, args);  
Diese Zeile startet Ihre Spring Boot-Anwendung. Die Methode SpringApplication.run startet die Anwendung unter Verwendung der angegebenen Klasse (in diesem Fall FynovaBackendApplication.class). 
Der Parameter args übergibt Argumente, die von der Befehlszeile an die Anwendung übergeben werden.
*/