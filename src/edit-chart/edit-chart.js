import React, { useRef, useState } from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import JSONDigger from "json-digger";
import { v4 as uuidv4 } from "uuid";
import "./edit-chart.css";

const EditChart = () => {
  const orgchart = useRef();
  const datasource = {
    id: 7,
    title: "Chairman Office",
    name: "চেয়ারম্যান দপ্তর",
    value: "7",
    children: [
      {
        id: 8,
        title: "Secretariat",
        name: "সচিবালয়",
        value: "8",
        children: [
          {
            id: 12,
            title: "Resource Management",
            name: "সম্পদ ব্যবস্থাপনা",
            value: "12",
            children: [],
          },
          {
            id: 13,
            title: "Director (Public Relations)",
            name: "পরিচালক (জনসংযোগ)",
            value: "13",
            children: [],
          },
          {
            id: 14,
            title: "Medical Officer",
            name: "মেডিকেল অফিসার",
            value: "14",
            children: [],
          },
          {
            id: 15,
            title: "Reserve",
            name: "রিজার্ভ",
            value: "15",
            children: [],
          },
          {
            id: 19,
            title: "Administration",
            name: "প্রশাসন",
            value: "19",
            children: [
              {
                id: 20,
                title: "Administration And Human Resources",
                name: "প্রশাসন ও মানবসম্পদ",
                value: "20",
                children: [
                  {
                    id: 21,
                    title: "Administration (Sub-Branch)",
                    name: "প্রশাসন (সাব-ব্রাঞ্চ)",
                    value: "21",
                    children: [],
                  },
                  {
                    id: 22,
                    title: "Human Resource",
                    name: "মানবসম্পদ",
                    value: "22",
                    children: [],
                  },
                  {
                    id: 121,
                    title: "Inspection",
                    name: "পরিদর্শন",
                    value: "121",
                    children: [],
                  },
                ],
              },
              {
                id: 23,
                title: "Finance And Accounting",
                name: "অর্থ ও হিসাব",
                value: "23",
                children: [
                  {
                    id: 24,
                    title: "Finance, Accounts and Audit",
                    name: "অর্থ, হিসাব ও নিরীক্ষা",
                    value: "24",
                    children: [],
                  },
                  {
                    id: 25,
                    title: "Management",
                    name: "ব্যবস্থাপনা",
                    value: "25",
                    children: [],
                  },
                ],
              },
              {
                id: 26,
                title: "Enforcement Unit",
                name: "এনফোর্সমেন্ট ইউনিট",
                value: "26",
                children: [],
              },
            ],
          },
          {
            id: 27,
            title: "Training And Information Technology",
            name: "প্রশিক্ষণ ও তথ্যপ্রযুক্তি",
            value: "27",
            children: [
              {
                id: 28,
                title: "Training and Research",
                name: "প্রশিক্ষণ ও গবেষণা",
                value: "28",
                children: [
                  {
                    id: 29,
                    title: "Training and Record",
                    name: "প্রশিক্ষণ ও রেকর্ড",
                    value: "29",
                    children: [],
                  },
                ],
              },
              {
                id: 30,
                title: "Information and Technology Cell",
                name: "তথ্য ও প্রযুক্তি সেল",
                value: "30",
                children: [
                  {
                    id: 31,
                    title: "Software Cell",
                    name: "সফটওয়্যার সেল",
                    value: "31",
                    children: [],
                  },
                  {
                    id: 32,
                    title: "Maintenance and Network Cell",
                    name: "মেইনটেনেন্স ও নেটওয়ার্ক সেল",
                    value: "32",
                    children: [],
                  },
                  {
                    id: 33,
                    title: "Helpdesk",
                    name: "হেল্পডেস্ক",
                    value: "33",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 34,
            title: "Inquiries And Investigation-1",
            name: "অনুসন্ধান ও তদন্ত-১",
            value: "34",
            children: [
              {
                id: 37,
                title: "Inquiries And Investigation-3 (Rajshahi Division)",
                name: "অনুসন্ধান ও তদন্ত-৩ (রাজশাহী বিভাগ)",
                value: "37",
                children: [],
              },
              {
                id: 38,
                title: "Inquiries And Investigation-4 (Rangpur Division)",
                name: "অনুসন্ধান ও তদন্ত-৪ (রংপুর বিভাগ)",
                value: "38",
                children: [],
              },
              {
                id: 39,
                title: "Daily And Recent Complaints Cell",
                name: "দৈনিক এবং সাম্প্রতিক অভিযোগ সেল",
                value: "39",
                children: [],
              },
              {
                id: 36,
                title: "Inquiries And Investigation-2 (Mymensingh Division)",
                name: "অনুসন্ধান ও তদন্ত-২ (ময়মনসিংহ বিভাগ)",
                value: "36",
                children: [],
              },
              {
                id: 35,
                title: "Inquiries And Investigation-1 (Dhaka Division)",
                name: "অনুসন্ধান ও তদন্ত-১ (ঢাকা বিভাগ)",
                value: "35",
                children: [],
              },
              {
                id: 40,
                title: "Dhaka Division (Divisional Office)",
                name: "ঢাকা বিভাগ (বিভাগীয় অফিস)",
                value: "40",
                children: [
                  {
                    id: 41,
                    title: "Dhaka-1 (District Office)",
                    name: "ঢাকা-১ (জেলা কার্যালয়)",
                    value: "41",
                    children: [],
                  },
                  {
                    id: 42,
                    title: "Dhaka-2 (District Office)",
                    name: "ঢাকা-২ (জেলা কার্যালয়)",
                    value: "42",
                    children: [],
                  },
                  {
                    id: 43,
                    title: "Tangail (District Office)",
                    name: "টাঙ্গাইল (জেলা কার্যালয়)",
                    value: "43",
                    children: [],
                  },
                  {
                    id: 44,
                    title: "Faridpur (District Office)",
                    name: "ফরিদপুর (জেলা কার্যালয়)",
                    value: "44",
                    children: [],
                  },
                  {
                    id: 45,
                    title: "Narayanganj (District Office)",
                    name: "নারায়ণগঞ্জ (জেলা কার্যালয়)",
                    value: "45",
                    children: [],
                  },
                  {
                    id: 46,
                    title: "Gazipur (District Office)",
                    name: "গাজীপুর (জেলা কার্যালয়)",
                    value: "46",
                    children: [],
                  },
                  {
                    id: 47,
                    title: "Kishoreganj (District Office)",
                    name: "কিশোরগঞ্জ (জেলা কার্যালয়)",
                    value: "47",
                    children: [],
                  },
                  {
                    id: 48,
                    title: "Madaripur (District Office)",
                    name: "মাদারীপুর (জেলা কার্যালয়)",
                    value: "48",
                    children: [],
                  },
                  {
                    id: 49,
                    title: "Gopalganj (District Office)",
                    name: "গোপালগঞ্জ (জেলা কার্যালয়)",
                    value: "49",
                    children: [],
                  },
                ],
              },
              {
                id: 50,
                title: "Mymensingh (Divisional Office)",
                name: "ময়মনসিংহ বিভাগ (বিভাগীয় অফিস)",
                value: "50",
                children: [
                  {
                    id: 51,
                    title: "Mymensingh (District Office)",
                    name: "ময়মনসিংহ (জেলা কার্যালয়)",
                    value: "51",
                    children: [],
                  },
                  {
                    id: 52,
                    title: "Jamalpur (District Office)",
                    name: "জামালপুর (জেলা কার্যালয়)",
                    value: "52",
                    children: [],
                  },
                ],
              },
              {
                id: 53,
                title: "Rajshahi (Divisional Office)",
                name: "রাজশাহী বিভাগ (বিভাগীয় অফিস)",
                value: "53",
                children: [
                  {
                    id: 54,
                    title: "Rajshahi (District Office)",
                    name: "রাজশাহী (জেলা কার্যালয়)",
                    value: "54",
                    children: [],
                  },
                  {
                    id: 55,
                    title: "Pabna (District Office)",
                    name: "পাবনা (জেলা কার্যালয়)",
                    value: "55",
                    children: [],
                  },
                  {
                    id: 57,
                    title: "Naogaon (District Office)",
                    name: "নওগাঁ (জেলা কার্যালয়)",
                    value: "57",
                    children: [],
                  },
                  {
                    id: 56,
                    title: "Bogra (District Office)",
                    name: "বগুড়া (জেলা কার্যালয়)",
                    value: "56",
                    children: [],
                  },
                ],
              },
              {
                id: 58,
                title: "Rangpur (Divisional Office)",
                name: "রংপুর বিভাগ (বিভাগীয় অফিস)",
                value: "58",
                children: [
                  {
                    id: 59,
                    title: "Rangpur (District Office)",
                    name: "রংপুর (জেলা কার্যালয়)",
                    value: "59",
                    children: [],
                  },
                  {
                    id: 60,
                    title: "Dinajpur (District Office)",
                    name: "দিনাজপুর (জেলা কার্যালয়)",
                    value: "60",
                    children: [],
                  },
                  {
                    id: 61,
                    title: "Kurigram (District Office)",
                    name: "কুড়িগ্রাম (জেলা কার্যালয়)",
                    value: "61",
                    children: [],
                  },
                  {
                    id: 62,
                    title: "Thakurgaon (District Office)",
                    name: "ঠাকুরগাঁও (জেলা কার্যালয়)",
                    value: "62",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 63,
            title: "Inquiries And Investigation -2",
            name: "অনুসন্ধান ও তদন্ত-২",
            value: "63",
            children: [
              {
                id: 68,
                title: "Chittagong (Divisional Office)",
                name: "চট্টগ্রাম বিভাগ (বিভাগীয় অফিস)",
                value: "68",
                children: [
                  {
                    id: 69,
                    title: "Chittagong-1 (District Office)",
                    name: "চট্টগ্রাম-১ (জেলা কার্যালয়)",
                    value: "69",
                    children: [],
                  },
                  {
                    id: 70,
                    title: "Chittagong-2 (District Office)",
                    name: "চট্টগ্রাম-২ (জেলা কার্যালয়)",
                    value: "70",
                    children: [],
                  },
                  {
                    id: 71,
                    title: "Rangamati (District Office)",
                    name: "রাঙামাটি (জেলা কার্যালয়)",
                    value: "71",
                    children: [],
                  },
                  {
                    id: 72,
                    title: "Comilla (District Office)",
                    name: "কুমিল্লা (জেলা কার্যালয়)",
                    value: "72",
                    children: [],
                  },
                  {
                    id: 73,
                    title: "Chandpur (District Office)",
                    name: "চাঁদপুর (জেলা কার্যালয়)",
                    value: "73",
                    children: [],
                  },
                  {
                    id: 74,
                    title: "Noakhali (District Office)",
                    name: "নোয়াখালী (জেলা কার্যালয়)",
                    value: "74",
                    children: [],
                  },
                  {
                    id: 75,
                    title: "Coxsbazar (District Office)",
                    name: "কক্সবাজার (জেলা কার্যালয়)",
                    value: "75",
                    children: [],
                  },
                ],
              },
              {
                id: 76,
                title: "Sylhet (Divisional Office)",
                name: "সিলেট বিভাগ (বিভাগীয় অফিস)",
                value: "76",
                children: [
                  {
                    id: 77,
                    title: "Sylhet (District Office)",
                    name: "সিলেট (জেলা কার্যালয়)",
                    value: "77",
                    children: [],
                  },
                  {
                    id: 78,
                    title: "Habiganj (District Office)",
                    name: "হবিগঞ্জ (জেলা কার্যালয়)",
                    value: "78",
                    children: [],
                  },
                ],
              },
              {
                id: 79,
                title: "Khulna (Divisional Office)",
                name: "খুলনা বিভাগ (বিভাগীয় অফিস)",
                value: "79",
                children: [
                  {
                    id: 80,
                    title: "Khulna (District Office)",
                    name: "খুলনা (জেলা কার্যালয়)",
                    value: "80",
                    children: [],
                  },
                  {
                    id: 81,
                    title: "Jessore (District Office)",
                    name: "যশোর (জেলা কার্যালয়)",
                    value: "81",
                    children: [],
                  },
                  {
                    id: 82,
                    title: "Kushtia (District Office)",
                    name: "কুষ্টিয়া (জেলা কার্যালয়)",
                    value: "82",
                    children: [],
                  },
                  {
                    id: 83,
                    title: "Jhenaidah (District Office)",
                    name: "ঝিনাইদহ (জেলা কার্যালয়)",
                    value: "83",
                    children: [],
                  },
                  {
                    id: 84,
                    title: "Bagerhat (District Office)",
                    name: "বাগেরহাট (জেলা কার্যালয়)",
                    value: "84",
                    children: [],
                  },
                ],
              },
              {
                id: 85,
                title: "Barisal (Divisional Office)",
                name: "বরিশাল বিভাগ (বিভাগীয় অফিস)",
                value: "85",
                children: [
                  {
                    id: 86,
                    title: "Barisal (District Office)",
                    name: "বরিশাল (জেলা কার্যালয়)",
                    value: "86",
                    children: [],
                  },
                  {
                    id: 87,
                    title: "Patuakhali (District Office)",
                    name: "পটুয়াখালী (জেলা কার্যালয়)",
                    value: "87",
                    children: [],
                  },
                  {
                    id: 88,
                    title: "Pirojpur (District Office)",
                    name: "পিরোজপুর (জেলা কার্যালয়)",
                    value: "88",
                    children: [],
                  },
                ],
              },
              {
                id: 123,
                title: "Inquiries And Investigation-5 (Chattogram Division)",
                name: "অনুসন্ধান ও তদন্ত-৫ (চট্টগ্রাম বিভাগ)",
                value: "123",
                children: [],
              },
              {
                id: 124,
                title: "Inquiries And Investigation-6 (Sylhet Division)",
                name: "অনুসন্ধান ও তদন্ত-৬ (সিলেট বিভাগ)",
                value: "124",
                children: [],
              },
              {
                id: 125,
                title: "Inquiries And Investigation-7 (Khulna Division)",
                name: "অনুসন্ধান ও তদন্ত-৭ (খুলনা বিভাগ)",
                value: "125",
                children: [],
              },
              {
                id: 126,
                title: "Inquiries And Investigation-8 (Barisal Division)",
                name: "অনুসন্ধান ও তদন্ত-৮ (বরিশাল বিভাগ)",
                value: "126",
                children: [],
              },
            ],
          },
          {
            id: 89,
            title: "Special Investigation",
            name: "বিশেষ তদন্ত",
            value: "89",
            children: [
              {
                id: 127,
                title: "Special Search and Investigation-1",
                name: "বিশেষ অনুসন্ধান ও তদন্ত-১",
                value: "127",
                children: [],
              },
              {
                id: 128,
                title: "Special Search and Investigation-2",
                name: "বিশেষ অনুসন্ধান ও তদন্ত-২",
                value: "128",
                children: [],
              },
              {
                id: 129,
                title: "Special Search and Investigation-3",
                name: "বিশেষ অনুসন্ধান ও তদন্ত-৩",
                value: "129",
                children: [],
              },
            ],
          },
          {
            id: 93,
            title: "Money Laundering",
            name: "মানিলন্ডারিং",
            value: "93",
            children: [
              {
                id: 94,
                title: "Money Laundering (Branch)",
                name: "মানিলন্ডারিং (ব্রাঞ্চ)",
                value: "94",
                children: [],
              },
              {
                id: 96,
                title: "Insurance and Other Financial Institutions",
                name: "বীমা ও অন্যান্য আর্থিক প্রতিষ্ঠান",
                value: "96",
                children: [],
              },
              {
                id: 95,
                title: "Bank",
                name: "ব্যাংক",
                value: "95",
                children: [],
              },
            ],
          },
          {
            id: 97,
            title: "Legal",
            name: "লিগ্যাল",
            value: "97",
            children: [
              {
                id: 98,
                title: "Legal (Branch)",
                name: "লিগ্যাল (ব্রাঞ্চ)",
                value: "98",
                children: [
                  {
                    id: 99,
                    title: "Supreme Court",
                    name: "সুপ্রিম কোর্ট",
                    value: "99",
                    children: [],
                  },
                  {
                    id: 100,
                    title: "Special Judge Court",
                    name: "বিশেষ জজ আদালত",
                    value: "100",
                    children: [],
                  },
                ],
              },
              {
                id: 132,
                title: "Prosecution",
                name: "প্রসিকিউশন",
                value: "132",
                children: [
                  {
                    id: 133,
                    title: "Prosecution (General)",
                    name: "প্রসিকিউশন (সার্বিক)",
                    value: "133",
                    children: [],
                  },
                  {
                    id: 134,
                    title: "Prosecution (Dhaka)",
                    name: "প্রসিকিউশন (ঢাকা)",
                    value: "134",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 104,
            title: "Prevention",
            name: "প্রতিরোধ",
            value: "104",
            children: [
              {
                id: 135,
                title:
                  "Prevention and Public Awareness-1 (Dhaka, Mymensingh, Rajshahi and Rangpur)",
                name: "প্রতিরোধ ও গনসচেতনতা-১ (ঢাকা, ময়মনসিংহ, রাজশাহী ও রংপুর)",
                value: "135",
                children: [
                  {
                    id: 140,
                    title: "Prevention {Sub-Branch-1}",
                    name: "প্রতিরোধ {সাব-ব্রাঞ্চ-১}",
                    value: "140",
                    children: [],
                  },
                  {
                    id: 141,
                    title:
                      "Public Awareness and Public Hearings {Sub-Branch-1}",
                    name: "গনসচেতনতা ও গণশুনানী {সাব-ব্রাঞ্চ-১}",
                    value: "141",
                    children: [],
                  },
                ],
              },
              {
                id: 136,
                title:
                  "Prevention and Public Awareness-2 (Chittagong, Sylhet, Khulna and Barishal)",
                name: "প্রতিরোধ ও গনসচেতনতা-২ (চট্টগ্রাম, সিলেট, খুলনা ও বরিশাল)",
                value: "136",
                children: [
                  {
                    id: 142,
                    title: "Prevention {Sub-Branch-2}",
                    name: "প্রতিরোধ {সাব-ব্রাঞ্চ-২}",
                    value: "142",
                    children: [],
                  },
                  {
                    id: 143,
                    title:
                      "Public Awareness and Public Hearings {Sub-Branch-2}",
                    name: "গনসচেতনতা ও গণশুনানী {সাব-ব্রাঞ্চ-২}",
                    value: "143",
                    children: [],
                  },
                ],
              },
              {
                id: 137,
                title: "NIS and UNCAC Focal Point",
                name: "NIS এবং UNCAC Focal Point",
                value: "137",
                children: [
                  {
                    id: 144,
                    title: "Coordination of Development Partners",
                    name: "উন্নয়ন সহযোগী সমন্বয়",
                    value: "144",
                    children: [],
                  },
                ],
              },
              {
                id: 138,
                title: "System Development and Coordination",
                name: "সিস্টেম উন্নয়ন ও সমন্বয়",
                value: "138",
                children: [
                  {
                    id: 145,
                    title: "System Reform and Development",
                    name: "সিস্টেম সংস্কার ও উন্নয়ন",
                    value: "145",
                    children: [],
                  },
                  {
                    id: 146,
                    title:
                      "Outreach Programs, Committees and Integrity Associations",
                    name: "আউটরিচ প্রোগ্রাম, কমিটি ও সততা সংঘ",
                    value: "146",
                    children: [],
                  },
                ],
              },
              {
                id: 139,
                title: "Research and Experimentation",
                name: "গবেষণা ও পরীক্ষণ",
                value: "139",
                children: [
                  {
                    id: 147,
                    title: "Publications and Libraries",
                    name: "প্রকাশনা ও লাইব্রেরি",
                    value: "147",
                    children: [],
                  },
                  {
                    id: 148,
                    title: "Research and Survey",
                    name: "গবেষণা ও জরিপ",
                    value: "148",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        title: "Commissioner (Branch-1)",
        name: "কমিশনার (ব্রাঞ্চ-১)",
        value: "9",
        children: [],
      },
      {
        id: 10,
        title: "Commissioner (Branch-2)",
        name: "কমিশনার (ব্রাঞ্চ-২)",
        value: "10",
        children: [],
      },
      {
        id: 11,
        title: "Detective Unit",
        name: "গোয়েন্দা ইউনিট",
        value: "11",
        children: [],
      },
      {
        id: 16,
        title: "Monitoring And Expertise",
        name: "পর্যবেক্ষণ এবং বিশারদ",
        value: "16",
        children: [
          {
            id: 17,
            title: "Monitoring And Evaluation",
            name: "পর্যবেক্ষণ ও মূল্যায়ন",
            value: "17",
            children: [],
          },
          {
            id: 18,
            title: "Experties",
            name: "বিশারদ",
            value: "18",
            children: [],
          },
        ],
      },
    ],
  };
  const [ds, setDS] = useState(datasource);
  const dsDigger = new JSONDigger(ds, "id", "children");

  const [selectedNodes, setSelectedNodes] = useState(new Set());
  const [newNodes, setNewNodes] = useState([{ name: "", title: "" }]);
  const [isEditMode, setIsEditMode] = useState(true);
  const [isMultipleSelect, setIsMultipleSelect] = useState(false);

  const readSelectedNode = (nodeData) => {
    if (isMultipleSelect) {
      setSelectedNodes((prev) => new Set(prev.add(nodeData)));
    } else {
      setSelectedNodes(new Set([nodeData]));
    }
  };

  const clearSelectedNode = () => {
    setSelectedNodes(new Set());
  };

  const onNameChange = (e, index) => {
    newNodes[index].name = e.target.value;
    setNewNodes([...newNodes]);
  };

  const onTitleChange = (e, index) => {
    newNodes[index].title = e.target.value;
    setNewNodes([...newNodes]);
  };

  const addNewNode = () => {
    setNewNodes((prevNewNodes) => [...prevNewNodes, { name: "", title: "" }]);
  };

  const removeNewNode = (index) => {
    setNewNodes((prevNewNodes) => {
      prevNewNodes.splice(index, 1);
      return [...prevNewNodes];
    });
  };

  const getNewNodes = () => {
    const nodes = [];
    for (const node of newNodes) {
      nodes.push({ ...node, id: uuidv4() });
    }
    return nodes;
  };

  const addChildNodes = async () => {
    await dsDigger.addChildren([...selectedNodes][0].id, getNewNodes());
    setDS({ ...dsDigger.ds });
    console.log(ds, "--------------ds");
  };

  const addSiblingNodes = async () => {
    await dsDigger.addSiblings([...selectedNodes][0].id, getNewNodes());
    setDS({ ...dsDigger.ds });
  };

  const addRootNode = () => {
    dsDigger.addRoot(getNewNodes()[0]);
    setDS({ ...dsDigger.ds });
  };

  const remove = async () => {
    await dsDigger.removeNodes([...selectedNodes].map((node) => node.id));
    setDS({ ...dsDigger.ds });
    setSelectedNodes(new Set());
  };

  const onMultipleSelectChange = (e) => {
    setIsMultipleSelect(e.target.checked);
  };

  const onModeChange = (e) => {
    setIsEditMode(e.target.checked);
    if (e.target.checked) {
      orgchart.current.expandAllNodes();
    }
  };

  return (
    <div className="edit-chart-wrapper">
      <section className="toolbar">
        <div className="selected-nodes">
          <div>
            <h4 style={{ display: "inline-block" }}>Selected Node</h4>
            <input
              style={{ marginLeft: "1rem" }}
              id="cb-multiple-select"
              type="checkbox"
              checked={isMultipleSelect}
              onChange={onMultipleSelectChange}
            />
            <label htmlFor="cb-multiple-select">Multiple Select</label>
          </div>
          <ul>
            {Array.from(selectedNodes).map((node) => (
              <li key={node.id}>
                {node.name} - {node.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="new-nodes">
          <h4>New Nodes</h4>
          <ul>
            {newNodes &&
              newNodes.map((node, index) => (
                <li key={index}>
                  <input
                    type="text"
                    placeholder="name"
                    value={node.name}
                    onChange={(e) => onNameChange(e, index)}
                  />
                  <input
                    type="text"
                    placeholder="title"
                    value={node.title}
                    onChange={(e) => onTitleChange(e, index)}
                  />
                  {newNodes.length === 1 || index === newNodes.length - 1 ? (
                    <button disabled={!isEditMode} onClick={addNewNode}>
                      +
                    </button>
                  ) : (
                    <button
                      disabled={!isEditMode}
                      onClick={() => removeNewNode(index)}
                    >
                      -
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="action-buttons">
          <button disabled={!isEditMode} onClick={addChildNodes}>
            Add Child Nodes
          </button>
          <button disabled={!isEditMode} onClick={addSiblingNodes}>
            Add Sibling Nodes
          </button>
          <button disabled={!isEditMode} onClick={addRootNode}>
            Add Root Node
          </button>
          <button disabled={!isEditMode} onClick={remove}>
            Remove Nodes
          </button>
          <input
            style={{ marginLeft: "1rem" }}
            id="cb-mode"
            type="checkbox"
            checked={isEditMode}
            onChange={onModeChange}
          />
          <label htmlFor="cb-mode">Edit Mode</label>
        </div>
      </section>
      <OrganizationChart
        ref={orgchart}
        datasource={ds}
        collapsible={!isEditMode}
        multipleSelect={isMultipleSelect}
        onClickNode={readSelectedNode}
        onClickChart={clearSelectedNode}
        draggable={true}
      />
    </div>
  );
};

export default EditChart;
