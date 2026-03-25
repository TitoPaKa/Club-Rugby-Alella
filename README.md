# Club Rugby Alella — MVP web unificada

Primera versió funcional de la nova web del Club Rugby Alella, amb:

- capa pública del club,
- Escoleta pública integrada,
- entrada a l'àrea privada d'Escoleta,
- footer unificat amb capa legal visible.

## Scripts

- `npm run check`: validació bàsica de rutes i SEO mínim.
- `npm run build`: executa validació i genera `dist/`.
- `npm test`: equivalent a `npm run check`.


## Desplegament a Railway

Aquest projecte és un lloc estàtic (HTML/CSS/JS).
Per a Railway/Railpack es força el proveïdor `staticfile` amb `railpack.json` i es defineix `root: .` a `Staticfile`.
Això evita l'error de Railpack **"No start command detected"** perquè no necessita `start` de Node per servir la web.
