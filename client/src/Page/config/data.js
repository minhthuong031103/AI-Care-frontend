const fetchMarkdownContent = async (url) => {
  try {
    const response = await fetch(url);
    const markdownContent = await response.text();
    return markdownContent;
  } catch (error) {
    console.error('Error fetching Markdown content:', error);
    return null;
  }
};
var description;
const loadDoctorData = async () => {
  description = await fetchMarkdownContent('/src/Page/config/doctor1.md');
};
const load = await loadDoctorData();

export const doctorList = [
  {
    id: '646b6e82986019f5ee6bdecd',
    name: 'Lê Mạnh Chính',
    city: 'Quảng Trị',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Chính là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.  ',
    descriptionVip: description,
    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1060&t=st=1684913364~exp=1684913964~hmac=298cd2951b29c56f8250e533438223820f806a8d9e49c2ce3f610490bdc96625',
    email: 'nominh67@gmail.com',
    vip: 'true',
  },
  {
    id: '646b8a62f3212c11a6e1e1f9',
    name: 'Nguyễn Minh Thường ',
    city: 'Hồ Chí Minh',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Thường là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/friendly-young-male-doctor-waving-hand_1262-17027.jpg?t=st=1684901902~exp=1684902502~hmac=09ff143886f15d1439ba9d64accc2186417984fc0984dcbcc15e80d728f0ff43',
  },
  {
    id: '646b8abcf3212c11a6e1e1ff',
    name: 'Đinh Thanh Tâm ',
    city: 'Hà Nội',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Tâm là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/serous-young-asian-female-doctor-using-stethoscope-medical-testing-concept_1262-12480.jpg?t=st=1684901902~exp=1684902502~hmac=e1ccb63707984cce23968f01121dc411c59ea0111b1f6293057d8223578be4c2',
  },
  {
    id: '646b8ad3f3212c11a6e1e201',
    name: 'Trần Quốc Anh ',
    city: 'Hồ Chí Minh',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Anh là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/smiling-asian-doctor-with-stethoscope_23-2147766705.jpg?t=st=1684917168~exp=1684917768~hmac=6e9dbb26fc96bacbc436a719cd3b18a2f2a7120742f017991f8e2209f2559e42',
  },
  {
    id: '646b8b23f3212c11a6e1e205',
    name: 'Lê Thị Tuyết Nhi ',
    city: 'Ninh Bình',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Nhi là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/young-bearded-male-doctor-wearing-white-coat-with-stethoscope-smiling-showing-number-two-victory-sign_141793-28279.jpg?w=996&t=st=1684917101~exp=1684917701~hmac=dabb323626b095b820c640521a03c67293aacc1d4f6f0d0c4da35f8dbab1865c',
  },
  {
    id: '646b8b44f3212c11a6e1e208',
    name: 'Trần Bình An ',
    city: 'Nghệ An',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'An là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-confident-male-doctor-professional-therapist-clinic-show-okay-gesture-recommend-guarantee-quality_1258-57510.jpg?w=1060&t=st=1684917117~exp=1684917717~hmac=32a5af78a0e8a46916dba9746e6aa4a76bd5ffea3d5969154b414195760d6c78',
  },
  {
    id: '646b8b4ff3212c11a6e1e20a',
    name: 'Lê Cẩm Tú ',
    city: 'Cà Mau',
    certificate: ['Cử nhân Luật', 'Thạc sĩ tâm lý học'],
    description:
      'Tú là một bác sĩ tâm lý chuyên nghiệp, luôn đồng hành và tận tâm giúp đỡ những người đang trải qua khó khăn tâm lý. Với tư duy nhạy bén và kiến thức sâu sắc về tâm lý con người, Thiện tạo ra môi trường an toàn và ấm cúng để khám phá, chẩn đoán và điều trị các vấn đề tâm lý.   ',

    address: ' 245 Hùng Vương, Thành phố Đông Hà, Tỉnh Quảng Trị',
    avatar:
      'https://img.freepik.com/free-photo/expressive-senior-woman-posing_344912-970.jpg?t=st=1684917180~exp=1684917780~hmac=248ebc5587c52c3eea0892f235d6bd39ea3cd200e6bc6f8bef91ee9642e0d947',
  },
];
