# primevue-mcp

Repositorio MCP (Model Context Protocol) para PrimeVue.

## Instalación global y uso en otros proyectos

Para instalar y vincular globalmente este MCP ejecuta:

```sh
npm install
npm run mcp:install
```

Esto compilará el paquete y lo hará disponible globalmente mediante `npm link`.

Luego, en cualquier proyecto donde quieras usarlo, simplemente ejecuta:

```sh
npm link primevue-mcp
```

O bien, puedes ejecutar el MCP directamente como comando global:

```sh
primevue-mcp
```

¡Listo! Ahora puedes importar y usar el MCP en tu proyecto o lanzarlo como binario global para integrarlo fácilmente con VS Code, Cursor, etc.

---

## Uso del MCP

Puedes iniciar el servidor MCP con:

```sh
npm run mcp
```

---

## Scripts útiles

- `npm run build`: Compila el código TypeScript a JavaScript en `dist/`.
- `npm run mcp`: Inicia el servidor MCP (asegúrate de compilar primero).
- Scripts de extracción (`extract:*`): Generan y combinan los datasets necesarios.

---

## Notas

- El campo `main` del paquete apunta a la versión compilada en `dist/mcp-server.js`.
- El script `prepare` asegura que el paquete se compila automáticamente al instalar o linkear.
- Si modificas el código fuente, recuerda volver a compilar (`npm run build`).

---

## Licencia

MIT

## Author

Basically took this from [primevue-mcp](https://github.com/enolgr/primevue-mcp) repository but made it work. It may have been skill issue on my side but I couldn't get it to work until I made these changes.
