import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      setSearchTimeout(
        setTimeout(() => {
          // const searchResult = allPosts.filter(
          //   (item) =>
          //     item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          //     item.prompt.toLowerCase().includes(searchText.toLowerCase())

          // );
          const searchedExercises = exercisesData.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );
          if (searchedExercises) setExercises(searchedExercises);
          else {
            setExercises(null);
          }
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          setSearch('');
        }, 500)
      );
    }

    // const searchedExercises = exercisesData.filter(
    //   (item) =>
    //     item.name.toLowerCase().includes(search) ||
    //     item.target.toLowerCase().includes(search) ||
    //     item.equipment.toLowerCase().includes(search) ||
    //     item.bodyPart.toLowerCase().includes(search)
    // );
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '30px', xs: '20px' } }}
        mb="49px"
        textAlign="center"
      >
        Các bài tập luyện đang chờ bạn khám phá
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '700px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Tìm kiếm bài tập sức khỏe"
          type="text"
        />
        <Button type="Button" onClick={handleSearch}>
          <p className="font-inter font-medium bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
            Tìm kiếm
          </p>
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
