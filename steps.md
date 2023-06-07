# TRACCIA

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un
messaggio in console con il numero della cella cliccata.

---

## Steps

- Recupero tutti gli elementi necessari dal DOM.
- Creo una funzione che crei una singola cella con il suo numero dedicato.
- **ATTENDO** il click del bottono 'Play'.
  - Creo un **CICLO** per richiamare 100 volte la funzione della cella
    - Aggiungo un ascolto di un click ad ogni cella.
      - Cambio colore (cambiando la classe) alla cella cliccata.
      - E stampo in console il numero corrente dedicato alla cella.
    - La inserisco nel DOM.

---

# BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

---

## Steps

- Recupero la select dal DOM.
- Controllo il valore che ha scelto l'utente.
  1. **SE 1** inserisco la classe 'Easy' e lo creo 100 volte.
  2. **ALTRIMENTI SE 2** Inserisco la classe 'Medium' e lo creo 81 volte.
  3. **ALTRIMENTI SE 2** Inserisco la classe 'Hard' e lo creo 49 volte.
