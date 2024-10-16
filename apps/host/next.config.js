//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  async rewrites() {
    return [{
      source: '/campaign-dashboard/:path*',
      destination: `${process.env.CD_DOMAIN}/campaign-dashboard/:path*`,
    }, {
      source: '/media-plan/:path*',
      destination: `${process.env.MP_DOMAIN}/media-plan/:path*`,
    }];
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
