import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
