module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c2bdba7674891dbe0283781314889ca'),
  },
});
