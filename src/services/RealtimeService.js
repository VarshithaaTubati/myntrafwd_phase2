const RealtimeService = {
  getUpdates: async () => {
    const response = await fetch('/api/updates');
    return response.json();
  }
};

export default RealtimeService;
