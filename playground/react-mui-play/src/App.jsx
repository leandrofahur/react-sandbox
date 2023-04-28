import React, { useState } from "react";

import { Box, Button, FormControl, TextField } from "@mui/material";

import { Send as SendIcon, Search as SearchIcon } from "@mui/icons-material";

import styles from "./App.module.scss";

function App() {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  const handleOnChangeddTask = (event) => {
    setTask(event.target.value);
  };

  const handleSearchTask = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Box className={styles.boxFormContainer}>
      <FormControl fullWidth className={styles.formControl}>
        <TextField
          id="add-todo"
          label="Task"
          variant="standard"
          className={styles.inputText}
          onChange={handleOnChangeddTask}
          value={task}
        />
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          className={styles.formCta}
          onClick={() => {
            console.log(task);
          }}
        >
          Add Task
        </Button>
      </FormControl>
      <FormControl fullWidth className={styles.formControl}>
        <TextField
          id="search-todo"
          label="Search"
          variant="standard"
          className={styles.inputText}
          onChange={handleSearchTask}
          value={search}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          className={styles.formCta}
          onClick={() => {
            console.log(search);
          }}
        >
          Search
        </Button>
      </FormControl>
    </Box>
  );
}

export default App;
