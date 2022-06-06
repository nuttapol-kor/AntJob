function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function inputNumberWithCommas(value, previousValue, digit) {
	digit = (digit === undefined)? 0: digit;
	value = value.trim().replace(new RegExp(',', 'g'), '');
	if(isNaN(value)) {
    return previousValue;
  }
	if (digit === 0 && value.indexOf('.') !== -1) {
    return previousValue;
  }
	if (value.indexOf('0') === 0) {
    return previousValue;
  }
	if (value.indexOf('.') === -1) {
    return numberWithCommas(value);
  }
	const afterDecimalLength = value.split('.')[1].length;
  if (afterDecimalLength > digit) {
		return previousValue;
	}
  return numberWithCommas(value)
}

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

export const inputGPA = (value, previousValue) => {
	value = value.trim().replace(new RegExp(',', 'g'), '')
  if (isNaN(value)) {
    return previousValue
  }
  if (value.indexOf('.') === -1) {
    if (value.length > 1 || value > 4) return previousValue
    else return value
  }
	if(value > 4){
		return previousValue
	}
  const afterDecimalLength = value.split('.')[1].length
  if (afterDecimalLength > 2) {
		return previousValue
	}
  return value
}

export const inputTel = (value, previousValue) => {
	value = value.trim().replace(new RegExp(/\D/, 'g'), '')
	return value;
}

function parseMonth(n) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]
	return months[n];
}

const jobSeniority = [
	{id: 1, name: "ฝึกงาน"},
	{id: 2, name: "พนักงานทั่วไป"},
	{id: 3, name: "พนักงานระดับสูง"},
	{id: 4, name: "ผู้จัดการ"},
	{id: 5, name: "ผู้อำนวยการ"},
	{id: 6, name: "ผู้บริหารระดับสูง"},
]

const jobSpecialisation = [
	{id: 1, name: "Business & Operations"},
	{id: 2, name: "Design"},
	{id: 3, name: "DevOps & IT"},
	{id: 4, name: "Marketing"},
	{id: 5, name: "Product Management"},
	{id: 6, name: "Quality Assurance"},
	{id: 7, name: "Sales"},
	{id: 8, name: "Software Engineering"},
	{id: 9, name: "Data Science and Analytics"},
]

export const getOptionSenioritys = () => {
	return(
		[
			{value: 1, label: "ฝึกงาน"},
			{value: 2, label: "พนักงานทั่วไป"},
			{value: 3, label: "พนักงานระดับสูง"},
			{value: 4, label: "ผู้จัดการ"},
			{value: 5, label: "ผู้อำนวยการ"},
			{value: 6, label: "ผู้บริหารระดับสูง"},
		]
	)
}

export const getLabelSeniority = (value) => {
	return getOptionSenioritys().find(seniority => seniority.value === value).label;
}


export const getOptionSpecialisations = () => {
	return(
		[
			{value: 1, label: "Business & Operations"},
			{value: 2, label: "Design"},
			{value: 3, label: "DevOps & IT"},
			{value: 4, label: "Marketing"},
			{value: 5, label: "Product Management"},
			{value: 6, label: "Quality Assurance"},
			{value: 7, label: "Sales"},
			{value: 8, label: "Software Engineering"},
			{value: 9, label: "Data Science and Analytics"},
		]
	)
}

export const getLabelSpecialisation = (value) => {
	return getOptionSpecialisations().find(specialisation => specialisation.value === value).label;
}

const jobRole = {
	1: [
		{id: 1, name: "Account (Client) Manager"},
		{id: 2, name: "Customer Service"},
		{id: 3, name: "Executive Management"},
		{id: 4, name: "Finance and Accounting"},
		{id: 5, name: "General Management"},
		{id: 6, name: "Human Resource Manager"},
		{id: 7, name: "Office Manager"},
		{id: 8, name: "Operations Manager"},
		{id: 9, name: "Project Manager"},
	],
	2: [
		{id: 10, name: "Animator"},
		{id: 11, name: "Creative Designer"},
		{id: 12, name: "Game Designer"},
		{id: 13, name: "Graphic Designer"},
		{id: 14, name: "Interactive Designer"},
		{id: 15, name: "Motion Graphic Designer"},
		{id: 16, name: "Multimedia Designer"},
		{id: 17, name: "UI Designer"},
		{id: 18, name: "UX/UI Designer"},
		{id: 19, name: "UX Designer"},
		{id: 20, name: "UX Researcher"},
		{id: 21, name: "Video Editor"},
	],
	3: [
		{id: 22, name: "Build/Release Engineer"},
		{id: 23, name: "Database Adminstrator"},
		{id: 24, name: "Desktop Support"},
		{id: 25, name: "DevOps Engineer"},
		{id: 26, name: "Hardware Engineer"},
		{id: 27, name: "IT Architecture"},
		{id: 28, name: "IT Audit"},
		{id: 29, name: "IT Infrastructure"},
		{id: 30, name: "IT Manager"},
		{id: 31, name: "Network Adminstrator"},
		{id: 32, name: "Network Engineer"},
		{id: 33, name: "Site Reliability Engineer"},
		{id: 34, name: "Solution Achitect"},
		{id: 35, name: "Sytem Analyst"},
		{id: 36, name: "Sytems Adminstrator"},
	],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: [],
}

export const getEmploymentType = () => [
	{
		id : 1,
		name : "Full-time"
	},
	{
		id : 2,
		name : "Contract"
	},
	{
		id : 3,
		name : "Internship"
	},
]

export const selectedMultiHandler = (value, name, getValues, setValue) => {
	const result = [...getValues(name)];
	if(result.find(x => x.id === value.id)){
		setValue(name, result.filter(x =>  x.id !== value.id));
		// if(getValues("roles").length === 0){
		// 	setError("roles", {
		// 		type: "manual",
		// 		message: "โปรดเลือกอย่างน้อย 1 หน้าที่"
		// 	})
		// }
		return
	}

	result.push(value);
	// if(result.length > 0){
	// 	clearErrors("roles");
	// }
	setValue(name,result);
}

export const getOptionDegrees = () => [
	{value: 1, label: "ประถมศึกษา"},
	{value: 2, label: "มัธยมศึกษาตอนต้น"},
	{value: 3, label: "มัธยมศึกษาตอนปลาย"},
	{value: 4, label: "ปริญญาตรี"},
	{value: 5, label: "ปริญญาโท"},
	{value: 6, label: "ปริญญาเอก"},
]

export const getLabelDegree = (value) => {
	return getOptionDegrees().find(degree => degree.value === value).label
}

export const getOptionYears = () => {
	let years = [];
	let currentYear = new Date().getFullYear();
	for(let i = currentYear; i >= 1900; i--){
		years.push({
			value: i,
			label: i
		})
	}
	return years;
}

export default { numberWithCommas, groupBy, parseMonth, jobSeniority, jobSpecialisation, jobRole, inputNumberWithCommas };
