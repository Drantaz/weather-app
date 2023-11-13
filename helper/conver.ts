

export const  Convert = (timestamp:any) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };