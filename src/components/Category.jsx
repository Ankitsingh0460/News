useEffect(() => {
  (async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2381c3c9c7dc4daea5110196517dbab5"
      );
      console.log(response.data.articles);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error.message);
    }
  })();
}, []);
