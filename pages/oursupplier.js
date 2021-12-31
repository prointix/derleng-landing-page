import React from "react";
import Layout from "../components/Layout";
import supplier1 from "../public/supplier1.svg";
import Image from "next/image";

const Oursupplier = () => {
  return (
    <Layout>
      {" "}
      <div className="oursupplier flex flex-col text-slate-700 lg:mx-4 lg:p-10 mt-10 leading-relaxed ">
        <div className="lg:border-none border-b-2 flex flex-col lg:flex-row lg:justify-between"></div>
        <div div className="w-scren h-auto m-auto">
          <Image src={supplier1} width={700} height={700}></Image>
        </div>{" "}
        <div className="p-4 mt-6">
          <h3 className="mb-3">ហេតុអ្វីត្រូវចូលរួមជាមួយយើង</h3>
          <p className="mb-3">
            ដើរលេង ត្រូវបានបង្កើតឡើងដើម្បីជាមធ្យោបាយដ៏សាម្មញមួយតំបូងគេ
            ក្នុងការកក់ ដំនើរកំសាន្ត ទូទាំង ព្រះរាជាណាចក្រកម្ពុជា និង
            ជុំវិញពិភពលោក នៅទីកន្លែងតែមួយ តាមរយះប្រព័ន្ធអនឡាញ
            សំរាប់ប្រជាជនកម្ពុជា ដែលមានបំណងធ្វើដំនើរកំសាន្ត។
          </p>
          <h3 className="mb-3">អ្នកណាខ្លះអាចចូលរួម?</h3>
          <p className="mb-3">
            យើងសហការណ៍ជាមួយដៃគូដែលពោរពេញទៅដោយជំនាញ និង
            ផ្តល់សេវាកម្មដល់អ្នកទេសចរកម្ពុជា ដែលមានដូចជា
            ប្រតិបត្តិករទេសចរណ៍ដែលបំរើរសេវាកម្មដំណើរកម្សាន្តក្នុងស្រុកនិងក្រៅស្រុក
            សហគមន៍ទេសចរណ៍ ផ្ទះស្នាក់ក្នុងភូមិ ផ្ទះសំណាក់ ហាងស្ប៉ានិងម៉ាស្សា
            ភោជនីយដ្ឋាន សេវាកម្មដឹកជញ្ជូន សួនកម្សាន្ត និង សំបុត្រចូលទស្សនាផ្សែងៗ
            ។ល។ អត្ថប្រយោជន៍នៃភាពជាដៃគូជាមួយដើរលេង៖
          </p>
          <div className="p-6">
            {" "}
            <li>
              បង្ហាញផលិតផលរបស់អ្នក
              ទៅកាន់អ្នកទេសចរកម្ពុជានៅក្នុងប្រភពទិន្ន័យដ៏ធំរបស់យើង ដែលមាន
              ការចុះឈ្មោះលើប្រព័ន្ធយើងជារៀងរាល់ថ្ងៃ។
            </li>
            <li>ប្រើប្រាស់ប្រព័ន្ធឌីជីថល ដែលបច្ចេកវិទ្យាចុងក្រោយ</li>
            <li>
              ចូលរួមប្រកួតប្រជែងពានរង្វាន់នៃ ជម្រើសប្រចាំឆ្នាំ របស់អ្នកដំណើរ
            </li>
            <li>
              ទទួលបានការវាយតំលៃ និង អោយពិន្ទុ ពិតប្រាកដពីសំណាក់ អ្នកទេសចរ
              និងអ្នកប្រើប្រាស់ កម្ពុជាយើងពិតប្រាកដ
            </li>
            <li>
              ចូលរួមការផ្សព្វផ្សាយពត៍មានជាប្រចាំខែដល់អ្នកប្រើប្រាស់របស់យើង
            </li>
            <li>
              ចូលរួមព្រឹត្តិការណ៍លក់អនឡាញប្រចាំឆ្នាំធំៗតាមប្រព័ន្ធផ្សព្វផ្សាយសង្គម
              និង តាមប្រព័ន្ធដើរលេងរបស់យើង
            </li>
            <li>
              ទទួលបានការកក់ឬសាកសួរ ភ្លាមៗ តាមប្រព័ន្ធជជែក
              និងតាមប្រព័ន្ធស្តុករបស់អ្នក
            </li>
            <li className="mb-5">
              ចូលរួមដោយសេរី គ្រាន់តែចំណាយលើកំរៃជើងសារសំរាប់ការលក់ទទួលបានជោគជ័យ
            </li>
          </div>

          <p>
            ចូលរួមក្នុងបញ្ជីសហគមន៍ដៃគូរបស់យើងនៅថ្ងៃនេះ
            ដើម្បីជួយគ្នាក្នុងការធ្វើឱ្យវិស័យទេសចរណ៍កម្ពុជាយើង កាន់តែ​រីកចម្រើន។
            ដើម្បីចុះឈ្មោះចំណាប់អារម្មណ៍របស់អ្នកក្នុងការចូលរួម
            សូមបំពេញទម្រង់បែបបទ
            ហើយក្រុមជំនាញរបស់យើងនឹងទំនាក់ទំនងត្រលប់ទៅអ្នកវិញក្នុងរយៈពេល
            យ៉ាងយូរ៤៨ ម៉ោងបន្ទាប់។
          </p>
        </div>
        <div className="m-auto py-20">
          <button className="coolBeans py-3 px-5">
            <a
              href={process.env.NEXT_PUBLIC_BECOME_SUPPLIER_URL}
              target="_blank"
            >
              ចូលរួមផ្សព្វផ្សាយទេសចរកម្ពុជា ជាមួយយើងឥឡូវនេះ
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Oursupplier;
