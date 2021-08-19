export default ({ command }) => ({
  build: {
    rollupOptions: {
      input: {
        app: "/app.js",
      },
      output: {
        sourcemap: true,
      },
    },
  },
});
