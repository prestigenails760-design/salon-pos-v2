# JDX Salon POS — Multi-Technician GoHighLevel Calendar

This Vercel project keeps the GoHighLevel Private Integration Token on the server and dynamically loads every calendar in the selected HighLevel sub-account.

## Required HighLevel scopes

- View Calendars — `calendars.readonly`
- View Calendar Events — `calendars/events.readonly`

## Vercel environment variables

Add only these required variables:

- `GHL_API_TOKEN` — a current Private Integration Token beginning with `pit-`
- `GHL_LOCATION_ID` — the HighLevel sub-account Location ID

Optional:

- `ALLOWED_ORIGIN` — use `*` for the first test, then restrict it to your website domain

After adding or changing variables, redeploy the Vercel project.

## Test URLs

- `/api/status`
- `/api/calendars`
- `/`

## Important repository structure

The API files must remain inside the `api` folder:

```
api/
  _shared.js
  appointments.js
  calendars.js
  status.js
index.html
package.json
vercel.json
```

## Security

Never put the Private Integration Token into `index.html`. If a token was exposed in a screenshot, regenerate it in HighLevel before using this project.
