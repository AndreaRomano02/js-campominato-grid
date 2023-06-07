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
