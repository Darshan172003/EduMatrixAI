import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="w-[95%] 800px:w-[92%] m-auto py-8 text-black dark:text-white px-4">
        <h1 className={`${styles.title} text-start pt-2 text-3xl font-bold text-blue-800 dark:text-blue-400`}>
          Platform Terms and Conditions
        </h1>

        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>1. Introduction</strong>
              <br />
              Welcome to EduMatrixAI. By accessing or using our platform, you agree to the following terms and conditions. If you do not agree, please discontinue using the platform.
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>2. Services Provided</strong>
              <br />
              EduMatrixAI is an educational technology platform providing AI-powered learning resources, including but not limited to:
              <ul className="ml-6 list-disc">
                <li>Interactive lessons</li>
                <li>Personalized learning plans</li>
                <li>Educational videos and materials</li>
                <li>Real-time feedback on quizzes and assignments</li>
              </ul>
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>3. User Responsibilities</strong>
              <br />
              By using EduMatrixAI, you agree to:
              <ul className="ml-6 list-disc">
                <li>Provide accurate and current information during registration.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Abide by all applicable laws and refrain from using the platform for any unlawful or harmful activities.</li>
                <li>Not copy, distribute, or modify any of the platform content without explicit permission.</li>
              </ul>
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>4. Eligibility</strong>
              <br />
              EduMatrixAI is intended for users who are at least 13 years old. Users below this age must have permission from a legal guardian to use the platform.
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>5. Payments and Subscription</strong>
              <br />
              Certain services on EduMatrixAI may require payment or subscription. You agree to:
              <ul className="ml-6 list-disc">
                <li>Pay all applicable fees in a timely manner.</li>
                <li>Understand that failure to pay may result in restricted access to the platform services.</li>
                <li>Refunds may be issued at the discretion of EduMatrixAI for unused services, depending on the nature of the subscription plan.</li>
              </ul>
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>6. Intellectual Property</strong>
              <br />
              All content on EduMatrixAI, including but not limited to text, graphics, logos, images, and software, is the property of EduMatrixAI or its licensors and is protected by intellectual property laws. You may not use or distribute this content without written consent.
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>7. User-Generated Content</strong>
              <br />
              EduMatrixAI may allow users to post comments, assignments, or other content. By submitting content, you:
              <ul className="ml-6 list-disc">
                <li>Grant EduMatrixAI the right to use, reproduce, and display your content.</li>
                <li>Warrant that your content does not infringe on any third-party rights or violate any laws.</li>
              </ul>
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>8. Limitation of Liability</strong>
              <br />
              EduMatrixAI is not responsible for any loss, damage, or harm caused by the use of the platform, including loss of data or interruption of services. You agree that your use of the platform is at your own risk.
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>9. Termination</strong>
              <br />
              EduMatrixAI reserves the right to terminate or suspend your account if you violate these terms. Any fees paid are non-refundable upon termination for breach of terms.
            </p>

            <p className="py-4 text-[16px] font-Poppins leading-8 whitespace-pre-line text-gray-800 dark:text-gray-300">
              <strong>10. Changes to Terms</strong>
              <br />
              EduMatrixAI reserves the right to modify these terms and conditions at any time. Changes will be communicated to users, and continued use of the platform constitutes acceptance of the revised terms.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
