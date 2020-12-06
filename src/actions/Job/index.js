
export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'GET_JOB_FAILURE';

export function fetchGetJob() {
  return async dispatch => {
    const dateTime = new Date();
    try {
      // if (res.status === 200) {
      console.log('action fetchGetJob');
      return await dispatch({
        type: GET_JOB_SUCCESS,
        data: [
          {
            "id": "286d8321-c5e5-4311-82b5-1756e5393199",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/286d8321-c5e5-4311-82b5-1756e5393199",
            "created_at": "Thu Dec 03 15:26:50 UTC 2020",
            "company": "Amenitiz",
            "company_url": "https://www.amenitiz.io/",
            "location": "Barcelona",
            "title": "Senior Backend Developer (RoR)",
            "description": "\u003cp\u003eAmenitiz is a fast-growing SaaS startup based in Barcelona and servicing over 1'500 customers in 24 months. Backed by top tier investors, Amenitiz is revolutionizing Hospitality software by centralizing all the hotelier needs in a single platform (website builder, PMS, channel manager, payment system, and much more).\u003c/p\u003e\n\u003cp\u003eWe’re passionate and ambitious about our mission and aim to promote a culture that cares deeply about its customers.\u003c/p\u003e\n\u003cp\u003eDespite the current global pandemic, we’re continuously growing and adapting to the situation, our team continues to rise stronger and that’s where you come in!\u003c/p\u003e\n\u003cp\u003eAre you a Software Engineer with extensive programming experience? Is your code fast, efficient, and reliable? Do you particularly enjoy working with amazing people and building something impacting? If so, let’s talk!\u003c/p\u003e\n\u003cp\u003eWe’re not looking for experts. We’re looking for smart people who can bring in the knowledge and the best processes to get things done. \u003c/p\u003e\n\u003cp\u003eAt Amenitiz, we are customer-centric, you will work on a day-to-day basis with our product team to design, architect, and implement our product. Our mission at Amenitiz is to support the digital transformation of Hospitality through a reliable SaaS solution offering a unique experience to its users.\u003c/p\u003e\n\u003cp\u003eThe whole Amenitiz team is based in Barcelona (our offices are in the heart of the city, near Plaza Cataluña); the Tech team counts 4 people, intending to grow to 12 people within the next 6 months.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eAs Senior Backend Developer, this position involves:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eProduct development in Ruby/Rails of a hospitality-related web-based product.\u003c/li\u003e\n\u003cli\u003eIntegrations between our platform to 3rd party APIs.\u003c/li\u003e\n\u003cli\u003eWork in an Agile environment with strong attention to scalability (We are serving hundreds of thousands of unique visitors per month through our CMS).\u003c/li\u003e\n\u003cli\u003eDiscuss, question, challenge, and offer technical solutions to product needs alongside the Product and Design Teams.\u003c/li\u003e\n\u003cli\u003eBeing able to mentor, coach, and train other colleagues as a domain expert.\u003c/li\u003e\n\u003cli\u003eIdentify bottlenecks, bugs, and propose solutions.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eRequired skills and experience:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eBachelor's degree or equivalent practical experience.\u003c/li\u003e\n\u003cli\u003e6 years+ experience in web development.\u003c/li\u003e\n\u003cli\u003e3 years+ experience in Ruby.\u003c/li\u003e\n\u003cli\u003ePragmatism and obsession for simplicity, efficiency, and performance.\u003c/li\u003e\n\u003cli\u003eProven knowledge of OOP, databases, development, and test methodologies.\u003c/li\u003e\n\u003cli\u003eObsession for quality and testing.\u003c/li\u003e\n\u003cli\u003eEager to learn new technologies and frameworks.\u003c/li\u003e\n\u003cli\u003eStrong communication skills.\u003c/li\u003e\n\u003cli\u003eProactive, driven, entrepreneurial with a 'can do’ attitude.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eBonus points for:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWorked in a fast-growing startup environment.\u003c/li\u003e\n\u003cli\u003eExperience in the hospitality industry.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eOur stack:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eRuby on Rails\u003c/li\u003e\n\u003cli\u003ePostgres and Redis\u003c/li\u003e\n\u003cli\u003eMemcached\u003c/li\u003e\n\u003cli\u003eSidekiq\u003c/li\u003e\n\u003cli\u003eHAproxy\u003c/li\u003e\n\u003cli\u003eHeroku\u003c/li\u003e\n\u003cli\u003eDigitalOcean\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eWhat do we offer?\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eA competitive salary.\u003c/li\u003e\n\u003cli\u003eAn amazing working environment, where you will be able to make a true contribution and get your voice heard.\u003c/li\u003e\n\u003cli\u003eThe opportunity to have a huge impact on developing a fast-growing business that is at a pivotal point in its growth to expand internationally.\u003c/li\u003e\n\u003cli\u003eThe team is growing fast and we offer plenty of career and development opportunities.\u003c/li\u003e\n\u003cli\u003eFlexibility to work from home part of the week.\u003c/li\u003e\n\u003c/ul\u003e\n",
            "how_to_apply": "\u003cp\u003eSend your application on \u003ca href=\"https://amenitiz.welcomekit.co\"\u003ehttps://amenitiz.welcomekit.co\u003c/a\u003e\u003c/p\u003e\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEtTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1aba9150689b0bddbf9f38332bb396e13bea6c2c/0%20(1).png"
          },
          {
            "id": "2dd205cd-99cd-4d7d-9993-71b848758c01",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/2dd205cd-99cd-4d7d-9993-71b848758c01",
            "created_at": "Thu Dec 03 14:52:42 UTC 2020",
            "company": "Amazon Web Services AWS",
            "company_url": "https://aws.amazon.com/de/",
            "location": "Berlin",
            "title": "Software Development Engineer – Backend – AWS Console Platform",
            "description": "\u003cp\u003eThe AWS Console Platform team looks for an experienced engineer, who is passionate about web technologies and building services.\u003c/p\u003e\n\u003cp\u003eWe are the team that runs the platform which serves the user interfaces for all of AWS.\nOur mission is to make it as easy as possible for product teams in AWS to serve and deploy their UIs. Our team supported 1.957 service or feature launches in 2018. To allow AWS services to deliver, we dive deep on automation and web technologies.\u003c/p\u003e\n\u003cp\u003eYour responsibilities will include:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eInnovate and simplify the process of creating user interfaces for all Amazon Web Services.\u003c/li\u003e\n\u003cli\u003eDesign, implement, and operate new web services on serverless technology.\u003c/li\u003e\n\u003cli\u003eSolve problems that span multiple layers of the application.\u003c/li\u003e\n\u003cli\u003eClosely collaborate with engineering teams around the globe.\u003c/li\u003e\n\u003cli\u003eAutomate all the things.\u003c/li\u003e\n\u003cli\u003eResearch web technology trends.\u003c/li\u003e\n\u003cli\u003eHelp the team grow professionally.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eAs an engineer on our team, you'll have the freedom to set the future direction of this platform.\u003c/p\u003e\n\u003cp\u003eWe'd love to see how your solutions will help both AWS customers and AWS service teams build user interfaces even more efficiently.\u003c/p\u003e\n\u003cp\u003eIf you have a passion for how web applications should be built, care about making other developers’ lives better and want to work with excellent engineers to solve interesting technology problems, you'll fit right in.\u003c/p\u003e\n\u003cp\u003eOur team is located in the heart of Berlin, Germany.\u003c/p\u003e\n\u003cp\u003eBASIC QUALIFICATIONS\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eAbility to work in a diverse team\u003c/li\u003e\n\u003cli\u003e4+ years' experience as a software developer\u003c/li\u003e\n\u003cli\u003eProficiency in at least one programming language, e.g. JavaScript, Java, Python, or Ruby\u003c/li\u003e\n\u003cli\u003eWillingness to relocate to Berlin, Germany\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003ePREFERRED QUALIFICATIONS\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eBachelor’s Degree or higher in Computer Science or a similar degree\u003c/li\u003e\n\u003cli\u003eExperience developing customer-facing web services or applications\u003c/li\u003e\n\u003cli\u003eExperience operating a service\u003c/li\u003e\n\u003cli\u003eExperience communicating technical concepts to a non-technical audience\u003c/li\u003e\n\u003cli\u003eExperience working on large projects\u003c/li\u003e\n\u003cli\u003eInterest in web browsers and frontend development\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eAmazon is an equal opportunities employer. We believe passionately that employing a diverse workforce is central to our success and we make recruiting decisions based on your experience and skills. We welcome applications from all members of society irrespective of age, gender, disability, sexual orientation, race, religion or belief.\u003c/p\u003e\n",
            "how_to_apply": "\u003cp\u003e\u003ca href=\"https://ad.doubleclick.net/ddm/clk/436616238;288615898;d?https://www.amazon.jobs/en/jobs/990699/software-development-engineer-backend-aws-console-platform?cmpid=JBOTAW6342B\u0026amp;utm_source=github.com\u0026amp;utm_campaign=aws\u0026amp;utm_medium=job_board\u0026amp;utm_content=job_posting\u0026amp;ss=paid\"\u003ehttps://ad.doubleclick.net/ddm/clk/436616238;288615898;d?https://www.amazon.jobs/en/jobs/990699/software-development-engineer-backend-aws-console-platform?cmpid=JBOTAW6342B\u0026amp;utm_source=github.com\u0026amp;utm_campaign=aws\u0026amp;utm_medium=job_board\u0026amp;utm_content=job_posting\u0026amp;ss=paid\u003c/a\u003e\u003c/p\u003e\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjZSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3b21032fb0cf4882a83d245721adc6938c237c9/aws.jpg"
          }],
        status: 200,
        dateTime
      });
      // }
      // return await dispatch({
      //   type: GET_JOB_FAILURE,
      //   data: null,
      //   status: res.status,
      //   dateTime,
      // });
      // const res = await fetch(`${host}/forums?filter[include]=comments&access_token=${getCookie('dw_token')}`);
      // const data = await res.json();
      // if (res.status === 200) {
      //   return await dispatch({
      //     type: GET_JOB_SUCCESS,
      //     data,
      //     status: res.status,
      //     dateTime,
      //   });
      // }
      // return await dispatch({
      //   type: GET_JOB_FAILURE,
      //   data: null,
      //   status: res.status,
      //   dateTime,
      // });
    } catch (err) {
      return await dispatch({
        type: GET_JOB_FAILURE,
        data: null,
        status: 400,
        dateTime
      });
      // return await dispatch({
      //   type: GET_JOB_FAILURE,
      //   data: null,
      //   status: err.status ? err.status : err,
      //   dateTime,
      // });
    }
  };
}