import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <h1 className={`${styles.title} text-4xl font-bold text-center`}>
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Terms and Conditions</span>
        </h1>

        <br />
        <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <ul className="list-none">
            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">1. Introduction</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                Welcome to EduMatrixAI. By accessing or using our platform, you agree to the following terms and conditions. If you do not agree, please discontinue using the platform.
              </p>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">2. Services Provided</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI is an educational technology platform providing AI-powered learning resources, including but not limited to:
              </p>
              <ul className="ml-6 list-disc text-[18px] text-gray-800 dark:text-gray-300">
                <li>Interactive lessons</li>
                <li>Personalized learning plans</li>
                <li>Educational videos and materials</li>
                <li>Real-time feedback on quizzes and assignments</li>
              </ul>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">3. User Responsibilities</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                By using EduMatrixAI, you agree to:
              </p>
              <ul className="ml-6 list-disc text-[18px] text-gray-800 dark:text-gray-300">
                <li>Provide accurate and current information during registration.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Abide by all applicable laws and refrain from using the platform for any unlawful or harmful activities.</li>
                <li>Not copy, distribute, or modify any platform content without explicit permission.</li>
              </ul>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">4. Eligibility</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI is intended for users who are at least 13 years old. Users below this age must have permission from a legal guardian to use the platform.
              </p>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">5. Payments and Subscription</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                Certain services on EduMatrixAI may require payment or subscription. You agree to:
              </p>
              <ul className="ml-6 list-disc text-[18px] text-gray-800 dark:text-gray-300">
                <li>Pay all applicable fees in a timely manner.</li>
                <li>Understand that failure to pay may result in restricted access to the platform services.</li>
                <li>Refunds may be issued at the discretion of EduMatrixAI for unused services, depending on the nature of the subscription plan.</li>
              </ul>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">6. Intellectual Property</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                All content on EduMatrixAI, including but not limited to text, graphics, logos, images, and software, is the property of EduMatrixAI or its licensors and is protected by intellectual property laws. You may not use or distribute this content without written consent.
              </p>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">7. User-Generated Content</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI may allow users to post comments, assignments, or other content. By submitting content, you:
              </p>
              <ul className="ml-6 list-disc text-[18px] text-gray-800 dark:text-gray-300">
                <li>Grant EduMatrixAI the right to use, reproduce, and display your content.</li>
                <li>Warrant that your content does not infringe on any third-party rights or violate any laws.</li>
              </ul>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">8. Limitation of Liability</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI is not responsible for any loss, damage, or harm caused by the use of the platform, including loss of data or interruption of services. You agree that your use of the platform is at your own risk.
              </p>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">9. Termination</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI reserves the right to terminate or suspend your account if you violate these terms. Any fees paid are non-refundable upon termination for breach of terms.
              </p>
            </li>

            <li className="py-4">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">10. Changes to Terms</h2>
              <p className="text-[18px] font-Poppins leading-8 text-gray-800 dark:text-gray-300">
                EduMatrixAI reserves the right to modify these terms and conditions at any time. Changes will be communicated to users, and continued use of the platform constitutes acceptance of the revised terms.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
