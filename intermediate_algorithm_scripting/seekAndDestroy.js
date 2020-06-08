function destroyer(arr, ...therest) {
    return arr
        .filter((item) => !therest.includes(item));
  }