# PALUMA BAR – Website-Entwurf (DEMO)

> **Unverbindlicher Demo-Entwurf.** Dies ist **keine** offizielle Website der PALUMA BAR.
> Der Entwurf soll dem Betrieb vorgestellt werden und darf ohne dessen Zustimmung
> nicht veröffentlicht oder als offiziell ausgegeben werden.

Statische Seite ohne Build, Backend, Datenbank, Formulare, Cookies oder Tracking.
Keine externen Schriften, Skripte oder Bilder – alles liegt lokal.

## Lokal ansehen
- `index.html` direkt im Browser öffnen, oder
- in diesem Ordner `python -m http.server 8000` ausführen und http://localhost:8000 öffnen.

## Struktur
| Datei | Inhalt |
|---|---|
| `index.html` | Alle Texte und Abschnitte (Titel, Die Bar, Weine, Kultur, Besuch, Fußzeile) |
| `css/styles.css` | Gestaltung; Farben und Schriften oben in `:root` |
| `js/app.js` | Nur das mobile Menü |
| `img/` | Platzhalter-Illustrationen (siehe `img/README.txt`) |
| `favicon.svg` | Vorläufiges Symbol |

## Anpassen nach Feedback
- **Texte:** direkt in `index.html`, jeder Abschnitt ist mit `<!-- ===== … ===== -->` markiert.
- **Farben:** `--red`, `--cream` usw. in `css/styles.css`.
- **Fotos:** Stellen mit `<!-- PLATZHALTER -->` in `index.html`; Anleitung in `img/README.txt`.
- **Fehlende Angaben** sind auf der Seite als gestrichelte Markierung „noch zu ergänzen“
  (`<span class="todo">`) sichtbar. Nach Bestätigung durch echten Text ersetzen.

## Demo-Hinweis entfernen (erst nach Freigabe durch PALUMA BAR)
Alle Stellen sind mit `DEMO-HINWEIS` kommentiert:
1. `<p class="demo-hinweis">` im Kopfbereich von `index.html` löschen.
2. `<p class="foot-demo">` in der Fußzeile löschen.
3. `<meta name="robots" content="noindex, nofollow">` entfernen.
4. „DEMO-Entwurf“ aus `<title>`, `description`, `og:*` und `twitter:*` entfernen.
5. Optional den Block `DEMO-HINWEIS` in `css/styles.css` löschen.

## Verwendete öffentliche Informationen (Stand: 03.11.2026)
- Adresse Weidengasse 81, 50668 Köln; Instagram @paluma.bar
- Weinbar mit rund 100 europäischen Weinen, viele direkt von Familienweingütern
- Rund 35 Sitzplätze innen; Konzerte und Kulturveranstaltungen geplant
- Denkmalgeschütztes Haus von 1890, früher Haushaltswaren Ed. Balke (seit 1937);
  Regale, Schiebeleiter, Tresen, Kasse und Schriftzug sollen erhalten bleiben
- Name aus den ersten Silben der Vornamen des Gründungsteams
- Eröffnung für 2026 angekündigt, kein genaues Datum

Quellen: Antenne NRW / Kölnische Rundschau (13.09.2026), ad-hoc-news.de (13.09.2026),
Instagram-Profil @paluma.bar. Die Website-Texte sind eigene Formulierungen.

## Offene Punkte vor einer echten Veröffentlichung
- [ ] Zustimmung von PALUMA BAR zu Entwurf, Texten und Gestaltung
- [ ] Eröffnungstermin
- [ ] Öffnungszeiten
- [ ] Kontakt (Telefon / E-Mail) und ob bzw. wie reserviert werden kann
- [ ] Weinkarte, Preise, ggf. Speisen
- [ ] Veranstaltungen und ob der Kulturplan aktuell ist
- [ ] Außenplätze (in einem Bericht erwähnt, nicht übernommen)
- [ ] Ob es zusätzlich einen Weinverkauf gibt (Instagram-Bio nennt „Bar & Weinhandel“ – nicht übernommen)
- [ ] Ob die Geschichte des Ladens (Ed. Balke) so erwähnt werden soll
- [ ] Logo, Schriften und Farben des Betriebs; echte Fotos mit Nutzungsrechten
- [ ] Impressum und Datenschutzerklärung (vom Betrieb bzw. rechtlich geprüft – nicht erfunden)
- [ ] Domain, Hosting, Vorschaubild (`og:image`, braucht absolute URL)
- [ ] Demo-Hinweis und `noindex` entfernen (siehe oben)
