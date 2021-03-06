import React from "react";
import Layout from "../components/Layout";
import writer from "../public/writer.svg";
import Image from "next/image";
import Head from "next/head";
import NavFooter from "../components/NavFooter";

const Writer = () => {
  return (
    <div>
      <NavFooter />{" "}
      <div className="about flex flex-col text-slate-700 lg:mx-4 lg:p-10 leading-relaxed tracking-wider mt-10">
        <Head>
          <title>About</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="lg:border-none border-b-2 flex flex-col lg:flex-row lg:justify-between">
          <div div className="w-scren h-auto m-auto">
            <Image src={writer} width={700} height={700}></Image>
          </div>{" "}
          <div className="p-10 mt-6 lg:w-2/3 flex-row">
            <h1 className="mb-3">ហេតុអ្វីត្រូវចូលរួមជាមួយយើង</h1>
            <p className="mb-3">
              ដើរលេង បានប្តេជ្ញាថា នឹងចូលរួមផ្សព្វផ្សាយនូវវិស័យទេសចរកម្ពុជា
              ដោយជំរុញ និង ទាក់ទាញទេសចរកម្ពុជា ទៅទស្សនា
              នូវកន្លែងស្អាតៗជាច្រើនរបស់ព្រះរាជាណាចក្រកម្ពុជា និង លើ ពិភពលោក។
            </p>
            <h3 className="mb-3">អ្នកណាខ្លះអាចចូលរួម?</h3>
            <p className="mb-3">
              យើងធ្វើការជាមួយអ្នកជំនាញ blogger ឬ vlogger ជាច្រើន
              ដែលផ្តល់ជូននូវបទពិសោធន៍ នៃការធ្វើដំណើរ រួមមាន អត្ថបទ រូបភាព វីដេអូ
              ដែលផ្តល់អត្ថប្រយោជន៍ដល់ អ្នកទេសចរកម្ពុជា ដែលជាអ្នកអាន និង
              អ្នកតាមដាននៃការផុសរបស់។ ខ្លឹមសារអត្ថបទ
              គួរតែទាក់ទងទៅនឹងការតំបន់ទាក់ទាញទេសចរណ៍ អេកូទេសចរណ៍របស់សហគមន៍
              បទពិសោធន៍ការធ្វើដំណើរ និងគន្លឹះផ្សេងៗក្នុងវិស័យទេសចរណ៍។
            </p>
            <div className="p-2 mb-6">
              <li>
                ចែករំលែកមាតិការរបស់អ្នក
                ទៅកាន់អ្នកទេសចរកម្ពុជានៅក្នុងប្រភពទិន្ន័យដ៏ធំរបស់យើង ដែលមាន
                ការចុះឈ្មោះលើប្រព័ន្ធយើងជារៀងរាល់ថ្ងៃ។
              </li>
              <li>
                ទទួលបានពិន្ទុបន្ថែមនៅពេល ការផ្ដល់មតិ និង ការចុចពេញចិត្តពីអ្នកអាន
                ឈានដល់គោលដៅដែលបានកំណត់
              </li>
              <li>
                ឈ្នះរង្វាន់ពីការប្រកួតប្រជែង អ្នកចែករំលែកមាតិកាឆ្នើមប្រចាំឆ្នាំ
              </li>
              <li>
                ចូលរួមដាក់មាតិការរបស់អ្នកជាមួយការផ្ញើរសារពត៌មានអនឡាញប្រចាំខែរបស់យើងដល់អ្នកអាន
              </li>
              <li>
                ចូលរួមជាវាគ្មិននៅក្នុងព្រឹត្តិការណ៍លក់ដ៏ធំតាមប្រព័ន្ធអ៊ិនធ័រណែតរបស់យើងនៅលើប្រព័ន្ធផ្សព្វផ្សាយសង្គម
              </li>
              <li>
                ទទួលបានឥណទានដំណើរកម្សាន្តបន្ថែមក្នុងនាមជាអ្នកចែកចាយមាតិកាកម្រិតខ្ពស់ដែលមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់
              </li>
              <li>
                ធ្វើដំណើរកំសាន្តដោយឥតគិតថ្លៃដោយប្រើឥណទានរបស់អ្នកក្នុងការកក់
              </li>
            </div>
            <p>
              ចូលរួមក្នុងបញ្ជីសហគមន៍ដៃគូរបស់យើងនៅថ្ងៃនេះ
              ដើម្បីជួយគ្នាក្នុងការធ្វើឱ្យវិស័យទេសចរណ៍កម្ពុជាយើង
              កាន់តែ​រីកចម្រើន។
              ដើម្បីចុះឈ្មោះចំណាប់អារម្មណ៍របស់អ្នកក្នុងការចូលរួម
              សូមបំពេញទម្រង់បែបបទ
              ហើយក្រុមជំនាញរបស់យើងនឹងទំនាក់ទំនងត្រលប់ទៅអ្នកវិញក្នុងរយៈពេល
              យ៉ាងយូរ៤៨ ម៉ោងបន្ទាប់។
            </p>
          </div>
        </div>
        <div className="m-auto py-20">
          <button className="coolBeans py-3 px-5">
            <a href={process.env.NEXT_PUBLIC_BECOME_WRITER_URL} target="_blank">
              ចូលរួមផ្សព្វផ្សាយទេសចរកម្ពុជា ជាមួយយើងឥឡូវនេះ
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writer;
