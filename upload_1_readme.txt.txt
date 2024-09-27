- https://web2-6-9ym8.onrender.com/

• interpolation/one-way binding
	-> Da
   -> src/components/NotesList.vue, :12, :16
   -> koriste se {{ note.title }} i {{ note.text }}
      
• two-way binding
	-> Da
   -> src/components/NoteCreator.vue, :7, :11
   -> koristi se v-model
      
• methods
	-> Da
   -> src/components/NotesList.vue, :33
      
• computed properties
	-> Ne
   
• barem jedan scoped style
	-> Da
   -> src/components/NotesList.vue, :45
      
• koristiti barem jedan lifecycle hook
	-> Da
   -> src/components/NotesList.vue, :39
   -> created lifecycle hook se koristi da dobavi bilješke nakon što se stvore komponente
      
• routing (više stranica)
	-> Da
   -> src/components/NotesList.vue, :8, src/components/NotFound.vue, :5, src/App.vue, :2
   -> koriste se router-link i router-view
     	- aplikacija mora biti bookmarkable, tako da rade linkovi
      		-> Da
         	-> src/routes/index.js, :13
            -> koristi se vue-ov History
     	- dinamičko usmjeravanje s 404 stranicom ("catch all") - 
         	-> Da
            -> src/routes/index.js, :9
            -> postignuto pomoću Vue routera definirajući rutu s pathom * koja odgovara svim rutama i redirecta na NotFound stranicu
               
• (barem) dvije komponente
     - komponenta bez stanja, koristiti properties
     			-> Ne
     - komponenta sa stanjem
     			-> Da
            -> src/components/NotesList.vue, :28, :30
            -> NotesList komponenta održava vlastito unutarnje stanje (notes)
               
• barem jedna komponenta mora emitirati barem jedan event
	-> Ne
   
• store (Pinia)
	-> Da
   -> src/stores/notes.js, :1
      
• asinkroni dohvat podataka s backenda
	-> Da
   -> src/db.js
   -> ostvarena je veza s Firebase bazom podataka





