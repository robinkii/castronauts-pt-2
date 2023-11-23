const resolvers = {
  Query: {
    // returns an array of tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTrackForHome();
    },
  },
};

module.exports = resolvers;
