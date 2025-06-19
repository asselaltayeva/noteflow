import React, { useState } from 'react';
import { frequentlyAskedQuestions } from '../../../utils/content';
import FAQList from '../FAQs/FAQlist';

function FAQs() {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions.find(
    (obj) => obj.category === category
  );
  const questionsArr = categoryObj?.questions || [];

  const handleQuestionClick = (id) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

  const handleCategoryClick = (newCategory) => {
    setActiveQuestion(null);
    setCategory(newCategory);
    console.log(newCategory); 
  };

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-32 px-24 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/none font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/none max-lg:text-4xl/10 max-lg:tracking-tight max-md:mb-4 max-md:text-left max-sm:text-3xl/9 max-sm:tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="mb-8 text-xl/loose font-light max-xl:text-lg/relaxed max-lg:text-lg/8 max-sm:text-base/loose">
          <p className="text-primary-100 text-center max-md:text-left max-sm:hidden">
            The most commonly asked questions about NoteFlow. <br className='max-md:hidden'/>
            Have a question that was not asked?{' '}
            <a href="#" className="underline decoration-1 underline-offset-3">
              Chat with our expert tech team.
            </a>
          </p>
        </div>

        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-md:justify-start">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                onClick={() => handleCategoryClick(obj.category)}
                className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3 text-lg/none 
                  max-xl:px-6 max-xl:text-base/loose max-sm:py-3
                  ${
                    obj.category === category
                      ? 'bg-primary-500 text-primary-1300 border-primary-500 primary-glow'
                      : 'hover:bg-primary-50 hover:text-primary-1300'
                  }`}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>

        <FAQList
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
}

export default FAQs;
