import { useState } from "react";
import style from "./styles/content.module.css";
function TextContainer() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const text = `
The Evolution of Technology: A Journey Through Time

The rapid evolution of technology has drastically transformed the world over the last few centuries. From the earliest stone tools crafted by our ancestors to the complex digital devices we rely on today, technological progress has reshaped human life, culture, and society.

The Early Beginnings
It all started in the Paleolithic era, where the first human-made tools were simple stone implements. These tools were used for basic survival tasks like hunting and gathering, and they marked the beginning of mankind's journey toward developing more advanced technologies.

By the time the Neolithic Revolution arrived around 10,000 BCE, humans began to shift from nomadic lifestyles to settled agricultural societies. This transition saw the first technological innovations that allowed for food production, including the invention of the plow and irrigation systems, which laid the groundwork for the rise of early civilizations.

The Rise of Civilization and Classical Technologies
As societies grew, so did the demand for more complex tools. The Bronze Age, which began around 3300 BCE, brought the advent of metallurgy, allowing humans to create stronger tools and weapons. The development of writing systems such as cuneiform in Mesopotamia and hieroglyphics in Egypt opened up new possibilities for communication, record-keeping, and the spread of knowledge.

Ancient civilizations such as the Egyptians, Greeks, and Romans built massive architectural wonders, from the Pyramids of Giza to the Roman aqueducts, many of which still stand today. The Classical era also saw advancements in mathematics, astronomy, and engineering, laying the foundation for the scientific revolution centuries later.

The Industrial Revolution: A Turning Point
The Industrial Revolution, which began in the late 18th century, was a period of dramatic technological change that transformed almost every aspect of human life. The invention of the steam engine by James Watt revolutionized transportation and manufacturing, making mass production possible for the first time in history.

This era saw the rise of factories, urbanization, and a shift from agrarian economies to industrialized ones. It also marked the beginning of significant innovations in communication, such as the telegraph, which enabled people to send messages over long distances for the first time.

The 20th Century: The Digital Age Emerges
The 20th century brought about an explosion of technological advancements, particularly in the fields of electricity, telecommunications, and computing. The invention of the telephone by Alexander Graham Bell in 1876 and the advent of the radio in the early 1900s forever changed how humans communicated over long distances.

However, it was the rise of computers in the mid-20th century that truly set the stage for the digital age. The development of the first computers, such as the ENIAC in 1945, was a pivotal moment in technological history. Over the next few decades, computing power increased exponentially, leading to the creation of personal computers, the internet, and the world wide web.

The late 20th century and early 21st century also saw the development of mobile technologies, with the advent of smartphones and tablets, as well as the rise of social media platforms that have reshaped how people interact with each other and access information.

The Present and Beyond: Emerging Technologies
Today, we live in a world where emerging technologies like artificial intelligence (AI), machine learning, virtual reality (VR), and blockchain are becoming increasingly integrated into everyday life. These technologies have the potential to revolutionize industries, from healthcare to finance, transportation, and entertainment.

AI is already transforming fields like robotics, autonomous driving, and personalized medicine, while blockchain is redefining the way we think about digital security and decentralization. Virtual and augmented reality technologies are creating new ways for people to experience digital content, whether it's in gaming, education, or professional training.

Challenges and Ethical Considerations
As technology continues to advance at a rapid pace, it also presents new challenges. Issues like data privacy, cybersecurity, and the ethical implications of AI and automation are at the forefront of global discussions. Many fear that the rise of automation could lead to significant job displacement, while others argue that these advancements will create new opportunities for human creativity and innovation.

Additionally, the environmental impact of rapidly advancing technologies cannot be ignored. The production and disposal of electronic devices, along with the growing energy consumption of data centers and blockchain networks, have raised concerns about sustainability and the long-term effects on our planet.

Conclusion
The evolution of technology is a fascinating story of human ingenuity and perseverance. From the earliest tools to the digital age, technology has played a central role in shaping human civilization. While we face new challenges as technology continues to advance, there is no doubt that innovation will continue to drive change and open new possibilities for future generations.

As we look to the future, the question is no longer whether technology will change our lives, but how we will navigate and shape these changes to ensure they benefit all of humanity.
`;

  const getFirstNWords = (str: string, n: number): string => {
    const result = str.split(" ").slice(0, n).join(" ");
    return result;
  };
  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };
  return (
    <div className={style["text-container"]}>
      <p className={`${style["text"]} ${expanded ? style["expanded"] : ""} `}>
        {!expanded && text.length > 60 ? (
          <>
            {getFirstNWords(text, 20)}
            <strong> ... </strong>
            <a href="" onClick={handleReadMore}>
              read more
            </a>
          </>
        ) : (
          text
        )}
      </p>
    </div>
  );
}

export default TextContainer;
