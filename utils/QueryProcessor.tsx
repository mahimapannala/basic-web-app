export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("mahima")) {
    return (
      "that's me -- testing"
    );
  }
  else if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Mahima"
    );
  }
  else if (query.toLowerCase().includes("largest")) {
    var str = query.toLowerCase();
    var matches = str.match(/(\d+)/);
    if (matches == null) {
      return (
        "Mahima"
      );
    }

    var numArray = []
    var length = matches?.length;
    for (var i = 0; i < length; i++)
      numArray.push(parseInt(matches[i]));

    const max = Math.max.apply(null, numArray) + "";
    return (
      max
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    var str = query.toLowerCase();
    var matches = str.match(/(\d+)/);
    if (matches == null) {
      return (
        "Mahima"
      );
    }

    var numArray = []
    var length = matches?.length;
    if (length != 2) {
      return (
        "Mahima"
      );
    }
    for (var i = 0; i < length; i++)
      numArray.push(parseInt(matches[i]));

    const add = numArray[0] + numArray[1] + "";
    return (
      add
    );
  }

  return "";
}
