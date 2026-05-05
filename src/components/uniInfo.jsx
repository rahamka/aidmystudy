function UniInfo() {
  // Scholarship ka data yahan manage karein
  const scholarships = [
    {
      id: 1,
      name: "Türkiye Bursları (Turkey Government Scholarship)",
      universities:
        "Middle East Technical University (METU), Istanbul Technical University",
      location: "Ankara or Istanbul, Turkey",
      Apply_Time: "January 10 to February 20 - Every Year",
      offers: "All Engineering disciplines (Fully Funded)",
      benefits:
        "Tuition Fee Free, Dormitory/Living, 1 Year free Turkish language course",
      eligibility: "12th class pass students (Intermediate)",
      documents:
        "Matric/Inter Certificate, Passport/ID Card, Statement of Purpose (SOP)",
      applyLink: "https://www.turkiyeburslari.gov.tr/",
      pocket_money_needed:
        "Approx. 50k to 80k PKR (For initial personal expenses)",
    },
    {
      id: 2,
      name: "Chinese Government Scholarship (CSC) - High Studies",
      universities:
        "Tsinghua University, Harbin Institute of Technology, Zhejiang University",
      location: "Different Cities, China",
      Apply_Time: "December to March - Every Year",
      offers: "Mechanical, Civil, Computer Science & Agriculture Engineering",
      benefits:
        "Full Tuition Cover, Free Accommodation, Monthly Stipend 2500-3000 RMB",
      eligibility: "12th class pass (Min 70%)",
      documents:
        "Intermediate Certificate, Study Plan, Physical Examination Form, Non-Criminal Record",
      applyLink: "https://www.chinesescholarshipcouncil.com/",
      pocket_money_needed:
        "1.5 to 2 Lakh PKR (For Air Ticket and initial settle-in)",
    },
    {
      id: 3,
      name: "Stipendium Hungaricum Scholarship Program",
      universities:
        "Budapest University of Technology and Economics, University of Debrecen",
      location: "Budapest, Hungary",
      Apply_Time: "November to January 15 - Every Year",
      offers: "Electrical, Chemical, and Software Engineering",
      benefits:
        "Tuition-free education, Medical Insurance, Monthly Contribution, Housing support",
      eligibility: "12th pass & HEC HAT/USAT Test is mandatory",
      documents:
        "Educational Transcripts, Medical Certificate, Motivation Letter, English Proficiency",
      applyLink: "https://stipendiumhungaricum.hu/",
      pocket_money_needed: "2 to 2.5 Lakh PKR (For Ticket and Visa processing)",
    },
    {
      id: 4,
      name: "KAIST International Student Scholarship",
      universities:
        "Korea Advanced Institute of Science and Technology (KAIST)",
      location: "Daejeon, South Korea",
      Apply_Time: "September (Early Cycle) and January (Regular)",
      offers: "Aerospace, Robotics, and Electronic Engineering",
      benefits:
        "Full Tuition, Monthly Allowance (350,000 KRW), Medical Insurance",
      eligibility: "12th pass (Outstanding grades in Maths/Physics)",
      documents:
        "High School Transcript, Recommendation Letter, English Proficiency Certificate",
      applyLink: "https://admission.kaist.ac.kr/",
      pocket_money_needed: "2.5 Lakh PKR (For Visa, Flight, and early days)",
    },
    {
      id: 5,
      name: "MEXT Japanese Government Scholarship",
      universities: "University of Tokyo, Osaka University, Nagoya University",
      location: "Japan",
      Apply_Time: "April to May - Every Year",
      offers: "Electronics, Marine, and Information Engineering",
      benefits:
        "No Tuition Fee, Round-trip Airfare, Monthly Stipend (117,000 Yen)",
      eligibility: "12th pass (Under 24 years of age)",
      documents:
        "Academic Marksheets, Health Certificate, Recommendation from School Principal",
      applyLink:
        "https://www.studyinjapan.go.jp/en/search-for-scholarships/tuition-reduction_search.php?lang=en",
      pocket_money_needed:
        "50k to 70k PKR (Emergency cash only, ticket is free)",
    },
    {
      id: 6,
      name: "GKS - Global Korea Scholarship (Undergraduate)",
      universities: "Seoul National University, Yonsei University",
      location: "South Korea",
      Apply_Time: "September to October (Embassy Track)",
      offers: "All Tech & Engineering fields",
      benefits:
        "Full Tuition, Airfare, Settlement Allowance, Korean Language Training",
      eligibility: "12th pass (80% or above marks)",
      documents:
        "Personal Statement, Study Plan, 2 Recommendation Letters, Proof of Citizenship",
      applyLink: "https://www.studyinkorea.go.kr/",
      pocket_money_needed:
        "Zero (Everything is covered, just keep 30k-40k for personal use)",
    },
    {
      id: 7,
      name: "Brunei Darussalam Government Scholarship",
      universities: "Universiti Teknologi Brunei (UTB)",
      location: "Bandar Seri Begawan, Brunei",
      Apply_Time: "December to February - Every Year",
      offers: "Mechanical and Electrical Engineering",
      benefits:
        "Exemption from Tuition, Airfare, Monthly Allowance (BND 500), Meals",
      eligibility: "12th pass (Age between 18-25)",
      documents:
        "Statement of Purpose, Police Clearance, Birth Certificate, Educational Docs",
      applyLink: "https://www.mfa.gov.bn/online-bdgs/",
      pocket_money_needed: "Minimal (Most things covered, Ticket included)",
    },
    {
      id: 8,
      name: "Lester B. Pearson International Scholarship",
      universities: "University of Toronto",
      location: "Toronto, Canada",
      Apply_Time: "October to January (Nomination first)",
      offers: "Engineering Science, Civil, and Computer Engineering",
      benefits:
        "Tuition, Books, Incidental Fees, and Full Residence Support for 4 years",
      eligibility: "12th pass (Last year of high school/fresh graduate)",
      documents:
        "School Nomination, English Proficiency (IELTS), Outstanding Achievement Record",
      applyLink: "https://future.utoronto.ca/pearson/announcement/",
      pocket_money_needed:
        "3.5 to 4 Lakh PKR (High Visa fees and flight costs)",
    },
    {
      id: 9,
      name: "Azerbaijan Government Scholarship",
      universities: "Azerbaijan Technical University, Baku State University",
      location: "Baku, Azerbaijan",
      Apply_Time: "February to April - Every Year",
      offers: "Oil & Gas, IT, and Environmental Engineering",
      benefits:
        "Tuition Fee, Flight (Once a year), Stipend (800 AZN), Medical, Visa support",
      eligibility: "12th pass (Citizens of OIC countries like Pakistan)",
      documents: "Passport, Medical Report (HIV/Hepatitis), 12th Marks-sheet",
      applyLink: "https://aida.mfa.gov.az/en/education/221/",
      pocket_money_needed: "1 Lakh PKR (For initial setup and ticket)",
    },
    {
      id: 10,
      name: "IsDB Scholarship Program",
      universities: "Top-ranked Universities Worldwide (Student's Choice)",
      location: "Depends on Admission",
      Apply_Time: "January to February - Every Year",
      offers: "Sustainable Engineering (Energy, Water, Transportation)",
      benefits: "Full Tuition, Monthly Stipend, Medical, Airfare (Economy)",
      eligibility:
        "12th pass (Strong academic record and community service interest)",
      documents:
        "Admission Letter from a top Uni, Father's Income Proof, 12th Certificate",
      applyLink: "https://www.isdb.org/scholarships",
      pocket_money_needed: "Zero (Fully covered, including travel)",
    },
    {
      id: 11,
      name: "DSU Regional Scholarships (Italy)",
      universities:
        "Politecnico di Milano, University of Pisa, University of Turin, etc.",
      location: "Various Regions, Italy",
      Apply_Time: "May to July - Every Year",
      offers: "All Bachelor Degree Programs (Engineering, IT, Business)",
      benefits:
        "Tuition Fee Waiver, Free Hostel Accommodation, Free Meals, Yearly Stipend (approx. 7000 Euros)",
      eligibility:
        "12th class pass (Intermediate). Scholarship is based on family income (Financial Need), not just high marks.",
      documents:
        "1. Passport (min 1 year validity)\n2. 12th Marksheet & Certificate (Attested by IBCC & MOFA)\n3. FRC (Family Registration Certificate)\n4. Father's Income Certificate & Property Valuation (Legalized by Italian Embassy/Consulate)\n5. English Proficiency Letter (from College) or IELTS.",
      applyLink: "https://www.edisu.piemonte.it/en",
      pocket_money_needed:
        "2.5 to 3 Lakh PKR (For DOV - Declaration of Value, Visa fees, and one-way ticket)",
    },
    {
      id: 12,
      name: "King Abdulaziz University (KAU) Scholarship",
      universities: "King Abdulaziz University",
      location: "Jeddah, Saudi Arabia",
      Apply_Time: "September to October - Every Year",
      offers:
        "Engineering, Computer Science, Sciences (Medicine excluded for international students)",
      benefits:
        "Full Tuition, Monthly Bursary (900 SAR), Free Accommodation, Two-way Air Ticket yearly, Subsidized Meals.",
      eligibility:
        "12th class pass (Excellent grades). Age between 17 to 25 years.",
      documents:
        "1. Valid Passport\n2. Attested Intermediate Certificate (MOFA)\n3. Birth Certificate\n4. Police Clearance Certificate (PCC)\n5. Detailed Medical Report (from an authentic hospital)\n6. Two Recommendation Letters from College Teachers.",
      applyLink: "https://admission.kau.edu.sa/Pages-intl-students-en.aspx",
      pocket_money_needed:
        "Zero (Visa is usually free or reimbursed, ticket is provided. Keep 20k PKR for attestation costs)",
    },
    {
      id: 13,
      name: "Romanian Government Scholarship (MFA)",
      universities: "Top Romanian Public Universities",
      location: "Bucharest, Cluj-Napoca, Timișoara, Romania",
      Apply_Time: "January 15 to March 1 - Every Year",
      offers: "Architecture, Engineering, IT, Agriculture",
      benefits:
        "Full Tuition Fee, Free Accommodation in Student Dorms, Monthly Stipend (65 Euros), 1 Year Free Romanian Language Preparatory Course.",
      eligibility: "12th class pass. Age should not exceed 35 years.",
      documents:
        "1. Copy of Passport (first 3 pages)\n2. 12th Degree and Transcripts (Translated into English/French/Romanian & Attested)\n3. Birth Certificate (Translated & Attested)\n4. Detailed CV\n5. Signed Declaration Form from MFA website.",
      applyLink: "https://scholarships.studyinromania.gov.ro/",
      pocket_money_needed:
        "2 to 2.5 Lakh PKR (For Air Ticket and Visa processing. Monthly stipend is low, so some personal backup is needed)",
    },
    {
      id: 14,
      name: "Qatar University International Scholarship",
      universities: "Qatar University",
      location: "Doha, Qatar",
      Apply_Time: "January to February - Every Year",
      offers: "College of Engineering, College of Arts & Sciences",
      benefits:
        "Exemption from Tuition Fees, Free University Accommodation, Annual Round-trip Airfare, Textbook Exemption.",
      eligibility:
        "12th class pass (Minimum 95% marks required for High School GPA). High competition.",
      documents:
        "1. Passport Copy\n2. Attested High School Transcripts (Attested by Qatar Embassy in Pakistan)\n3. IELTS (Score 5.5) or TOEFL or SAT\n4. Health Certificate/Medical Evaluation.",
      applyLink: "https://www.qu.edu.qa/students/admission/scholarships",
      pocket_money_needed:
        "50k to 80k PKR (For document attestation from Qatar Embassy and personal expenses. Ticket provided)",
    },
    {
      id: 15,
      name: "SIIT Undergraduate Scholarship (OFS)",
      universities:
        "Sirindhorn International Institute of Technology (Thammasat University)",
      location: "Pathum Thani, Thailand",
      Apply_Time: "March to April & September to October (Two intakes)",
      offers: "Computer Engineering, Chemical, Mechanical, Civil, and IT",
      benefits:
        "Full Tuition and Educational Support Fees, Monthly Living Allowance (10,000 Baht), Medical Insurance.",
      eligibility:
        "12th class pass (Min 75% marks). Excellent academic record in Mathematics and Physics.",
      documents:
        "1. Passport Copy\n2. High School Transcripts (Attested)\n3. Standardized Test Scores (SAT/ACT) - Optional but highly recommended\n4. English Proficiency Score (IELTS 6.0 / TOEFL)\n5. Citizen ID Card (CNIC/B-Form).",
      applyLink:
        "https://www.siit.tu.ac.th/about_news_detail.php?sid=61&nid=479",
      pocket_money_needed:
        "1 to 1.5 Lakh PKR (For Visa and Flight Ticket. Allowances cover living costs well)",
    },
    {
      id: 16,
      name: "TaiwanICDF Higher Education Scholarship",
      universities:
        "National Tsing Hua University, National Taiwan University, etc.",
      location: "Taipei, Hsinchu, Taiwan",
      Apply_Time: "January 1 to March 15 - Every Year",
      offers: "Mechanical Engineering, Tropical Agriculture, IT",
      benefits:
        "Full Tuition, Return Airfare, Free Dormitory Accommodation, Monthly Allowance (NT$ 12,000), Insurance.",
      eligibility:
        "12th class pass. Citizen of an eligible country (Pakistan is usually in the general list, verify yearly).",
      documents:
        "1. Passport\n2. 12th Certificate & Transcripts (Attested by Taipei Economic and Cultural Mission)\n3. Two Letters of Recommendation\n4. Study Plan/Statement of Purpose\n5. English Proficiency Certificate.",
      applyLink: "https://www.icdf.org.tw/wSite/np?ctNode=31561&mp=2",
      pocket_money_needed:
        "1 Lakh PKR (For initial expenses and visa processing costs)",
    },
    {
      id: 17,
      name: "Russian Government Scholarship (Study in Russia)",
      universities:
        "Higher School of Economics, ITMO, Bauman Moscow State Technical University",
      location: "Moscow, St. Petersburg, Russia",
      Apply_Time: "September to December - Every Year",
      offers: "Aeronautical, Software, Nuclear, and Civil Engineering",
      benefits:
        "Free Tuition for the entire duration, Monthly maintenance allowance, Dormitory accommodation (highly subsidized).",
      eligibility:
        "12th class pass. Selection is often based on an entrance exam or portfolio/interview.",
      documents:
        "1. Passport (valid for at least 18 months from arrival date)\n2. 12th Certificate (Translated to Russian and Notarized)\n3. Medical Certificate confirming absence of HIV/AIDS and Tuberculosis\n4. Consent for Personal Data Processing form.",
      applyLink: "https://education-in-russia.com/",
      pocket_money_needed:
        "1.5 Lakh PKR (For Ticket, Visa, and early settling. Dorms cost $10-$30/month but you pay for own food)",
    },
    {
      id: 18,
      name: "Sabanci University International Scholarship",
      universities: "Sabanci University",
      location: "Istanbul, Turkey",
      Apply_Time: "January to August (Evaluated upon application)",
      offers: "Computer Science, Mechatronics, Industrial Engineering",
      benefits:
        "Varies from Partial (25%) to Fully Funded. Full includes: Tuition Exemption, Dormitory Support, Monthly Stipend (for top tier).",
      eligibility:
        "12th class pass. Automatic evaluation during admission based on academic merit.",
      documents:
        "1. Passport\n2. High School Diploma/Transcripts\n3. SAT/ACT Scores (Compulsory for Full Scholarship)\n4. TOEFL/PTE scores (If available)\n5. Academic Letter of Recommendation\n6. Extracurricular achievements/Certificates.",
      applyLink:
        "https://www.sabanciuniv.edu/en/scholarships-prospective-students",
      pocket_money_needed:
        "Varies. If fully funded, 1 Lakh PKR for Ticket & Visa. If partial, costs will be much higher.",
    },
    {
      id: 19,
      name: "Jiangsu Government Scholarship (Jasmine Scholarship)",
      universities:
        "Nanjing University, Southeast University, Jiangsu University",
      location: "Jiangsu Province, China",
      Apply_Time: "January to May - Every Year",
      offers: "All Engineering, Architecture, and Tech disciplines",
      benefits:
        "Full Tuition Waiver, Accommodation, Comprehensive Medical Insurance, Monthly Stipend (1,500 RMB).",
      eligibility:
        "12th class pass with good academic standing. Must be a non-Chinese citizen in good health.",
      documents:
        "1. Passport (validity > 1 year)\n2. Notarized highest diploma (12th class)\n3. Notarized Transcripts\n4. Foreigner Physical Examination Form (Official Chinese format)\n5. Non-criminal record certificate (PCC)\n6. HSK score (if applying for Chinese-taught) or English Proficiency (for English-taught).",
      applyLink: "https://www.admissions.cn/courses/search?keyword=scholarship",
      pocket_money_needed:
        "1.5 Lakh PKR (For Air Ticket and initial living costs before the first stipend arrives)",
    },
    {
      id: 20,
      name: "Manaaki New Zealand Scholarships",
      universities:
        "University of Auckland, Massey University, University of Canterbury",
      location: "New Zealand",
      Apply_Time:
        "February to February (Specific window opens for 2-3 weeks yearly)",
      offers: "Renewable Energy, Agriculture, Disaster Risk Management",
      benefits:
        "Full Tuition, Return Air Travel, Establishment Allowance (NZ$3,000), Weekly Living Allowance (NZ$531), Medical Insurance.",
      eligibility:
        "12th class pass. Age 18 or older. Must meet academic and English requirements.",
      documents:
        "1. Passport\n2. Attested Educational Documents\n3. Proof of English Proficiency (IELTS 6.0 overall)\n4. Details of any relevant work/farming/community experience\n5. Strong statement regarding how the degree will help your home country (Pakistan).",
      applyLink: "https://www.nzscholarships.govt.nz/",
      pocket_money_needed:
        "Zero (This is one of the most generous scholarships globally, everything is pre-paid or reimbursed)",
    },
  ];
  // Aap yahan mazeed scholarships asani se add kar sakte hain

  return (
    <div id="UniInfo" className="bg-slate-50 min-h-screen pb-10">
      {/* Header Section */}
      <div className="text-center py-10 px-4">
        <h1 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-blue-600">
          Welcome to University Information Page
        </h1>
        <p className="font-['Poppins'] text-lg md:text-xl mt-3 text-slate-600 max-w-2xl mx-auto">
          Current Universities offering Scholarships for Sindh Students
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
          Available Fully-Funded Scholarships
        </h2>

        <div className="grid gap-8">
          {scholarships.map((scholar) => (
            <div
              key={scholar.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 p-4">
                <h3 className="text-xl font-semibold text-white">
                  {scholar.id}. {scholar.name}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-4 text-slate-700">
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      University Name:
                    </span>
                    <span className="flex-1">{scholar.universities}</span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      Location:
                    </span>
                    <span className="flex-1">{scholar.location}</span>
                  </li>
                  <li className=" flex flex-row sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      Apply Time:
                    </span>
                    <span>{scholar.Apply_Time}</span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      What Offers:
                    </span>
                    <span className="flex-1 text-green-700 font-medium">
                      {scholar.offers}
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      Benefits:
                    </span>
                    <span className="flex-1 italic bg-blue-50 p-2 rounded-lg text-sm border-l-4 border-blue-400">
                      {scholar.benefits}
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      Who Can Apply:
                    </span>
                    <span className="flex-1">{scholar.eligibility}</span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold text-blue-800 w-44 shrink-0">
                      Documents for Apply:
                    </span>
                    <span className="flex-1">{scholar.documents}</span>
                  </li>
                </ul>

                <div className="mt-8 flex justify-center sm:justify-start">
                  <a
                    href={scholar.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-md flex items-center gap-2">
                    <span>Apply Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schlorship 2 */}
      </div>
    </div>
  );
}

export default UniInfo;
