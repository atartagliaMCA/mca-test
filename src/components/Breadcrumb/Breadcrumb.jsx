import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";
import { useMatches, useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export const Breadcrumb = () => {
  const [crumbs, setCrumbs] = useState([]);
  const navigate = useNavigate();
  let matches = useMatches();
  let links = crumbs.slice(0, -1);
  let [lastMatch] = crumbs.slice(-1);

  useEffect(() => {
    Promise.all(
      matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match))
    ).then(setCrumbs);
  }, [matches]);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      {links?.map((crumb, index) => (
        <Link
          underline="hover"
          key={index}
          color="inherit"
          href="#"
          onClick={() => navigate(crumb.href)}
        >
          {crumb.text}
        </Link>
      ))}
      {lastMatch && (
        <Typography color="text.primary">{lastMatch?.text}</Typography>
      )}
    </Breadcrumbs>
  );
};
