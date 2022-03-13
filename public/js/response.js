function getBotResponse(input) {

  switch (input) {
    case "I need help":
      return "What can I help you with today?";

    case "I feel like there is something wrong with my mental health":
      return "I am so sorry to hear that! How can I help?";

    case "Is there anyone I can talk to?":
      return "Yes there is! Call 310-6789 to get in touch with a 24/7 support agent";

    case "hello":
      return "Hello there! <br> How can I help you today?";

    case "I feel alone":
      return "I am sorry to hear that. Believe me, you are not alone. We love you.";

    case "I'm scared I am gonna do something dumb":
      return "Yes there is! Call 310-6789 to get in touch with a 24/7 support agent";

    case "I'm worried about my friend but I don't know what to do":
      return "Make sure you check up on him or her as much as you can! Talk to a parent or a councillor if possible ";
    default:
      return "ASDasd";
  }

}