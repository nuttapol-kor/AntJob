import React from 'react';
import Service from "../job group/service.jpeg"
import Maintance from "../job group/maintance.jpg"
import Logistic from "../job group/logistic.jpg"
import Maid from "../job group/maid.jpg"
import QualityAssurance from "../job group/qualityassurance.jpg"
import Sales from "../job group/sales.jpg"
import SoftwareEngineering from "../job group/softwareengineering.jpg"
import DataScience from "../job group/datascience.jpg"
import Design from "../job group/design.jpg"
import Marketing from "../job group/marketing.jpg"
import Devops from "../job group/devops.jpg"
import ProductManagement from "../job group/productmanagement.jpg"



const jobGroup = [
    {
        idJobGroup: 1,
        name: "งานบริการ",
        image: Service,
        icon: <i class="fal fa-concierge-bell"></i>,
        count: 23
    },
    {
        idJobGroup: 2,
        name: "งานช่าง",
        image: Maintance,
        icon: <i class="fal fa-tools"></i>,
        count: 23
    },
    {
        idJobGroup: 3,
        name: "งานขนส่ง",
        image: Logistic,
        icon: <i class="fal fa-shipping-fast"></i>,
        count: 23
    },
    {
        idJobGroup: 4,
        name: "งานแม่บ้าน",
        image: Maid,
        icon: <i class="fal fa-broom"></i>,
        count: 23
    },
    // {
    //     idJobGroup: 5,
    //     name: "งานธรุการ"
    // },
    {
        idJobGroup: 6,
        name: "Quality Assurance",
        image: QualityAssurance,
        icon: <i class="fal fa-radiation-alt"></i>,
        count: 23
    },
    {
        idJobGroup: 7,
        name: "Sales",
        image: Sales,
        icon: <i class="fal fa-sack-dollar"></i>,
        count: 23
    },
    {
        idJobGroup: 8,
        name: "Software Engineering",
        image: SoftwareEngineering,
        icon: <i class="fal fa-laptop"></i>,
        count: 23
    },
    {
        idJobGroup: 9,
        name: "Data Science and Analytics",
        image: DataScience,
        icon: <i class="fal fa-file-chart-pie"></i>,
        count: 23
    },
    // {
    //     idJobGroup: 10,
    //     name: "Business & Operations"
    // },
    {
        idJobGroup: 11,
        name: "Design",
        image: Design,
        icon: <i class="fal fa-palette"></i>,
        count: 23
    },
    {
        idJobGroup: 12,
        name: "DevOps & IT",
        image: Devops,
        icon: <i class="fal fa-sitemap"></i>,
        count: 23
    },
    {
        idJobGroup: 13,
        name: "Marketing",
        image: Marketing,
        icon: <i class="fal fa-lightbulb-on"></i>,
        count: 23
    },
    {
        idJobGroup: 14,
        name: "Product Management",
        image: ProductManagement,
        icon: <i class="fal fa-ball-pile"></i>,
        count: 23
    }
];

export default jobGroup