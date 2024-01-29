import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

import CampoutMain from 'layouts/CampoutMain.js';
import BAAAHSLogo from 'layouts/Main/BAAAHSLogo';

const contentItems = [
  {
    name: 'Item 1',
    height: 300,
    width: 500,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
  {
    name: 'Item 2',
    height: 300,
    width: 500,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
  {
    name: 'Item 3',
    height: 300,
    width: 500,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
  {
    name: 'Item 4',
    height: 300,
    width: 700,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
  {
    name: 'Item 5',
    height: 500,
    width: 200,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
  {
    name: 'Item 6',
    height: 600,
    width: 400,
    src: 'https://lh3.googleusercontent.com/pw/ABLVV854juUtNiVdCR91ZX_YU2U51nqhSHke6YoLMpDDCCDXgP5y77HpgckJC2sWHpmbklj6IE6c7knkJ9oqSxlqa4y-wrYbBA_mRuxMUOesM_VZgwO_He3YCJoFcDBc4ppLCtCnktWUUKLLJt83xL7uBW8kxALYTKVsedcKRUG3WvL1bJiS179Huzt4epjjs8YgP6fbae-iT9zaszTP5sn_iuFIdEgM8e49cDjLBCwm6WmYHJKWdWk7CZzTWa3_hNdjihifdR1lpbYVQNop_pjzJcRHcJmak0-fU8gy8olBoyKX4QLJfsZNELmKrAx3E_WBfVL4If1gSc2i6RiSkCyUx2o-SxhZ4IQCqfcewzJzzO5Yp83W5Aq2LB_d255bFp3YDt7O4o0fbBocFciqFf3EMMhXAlJTttxxU0dZrDA8ilPmZic0JJjzkE8QG-3JneQ01lKLFwd49s9pFSiEJc29W0wq040jXx3hGCOmDbRmA2j9dpnw1ZupfgRBaE1PlXWd_BWYMPV7-dPIDDg1r8xK0mbn3dA3KO8HiUpsNsNGYpGMzE1Xk2iQVYfbvI7ZfVMHb-Zo-FcxiZweBLR-aUzgTrjlVoAJvoUIxQ-y8YjrK3D6quqEPLEkWGhEiCelH05Y_gfs7B11YQIA_R6Xs59ujWCKEGm2R28sg3NvE2H5oBYp4sMZvr06nVgzeq8M2q72ouMcAmf6SpGcSWxCJejIxsjEbN3xrCxOctTfXLnerZsJ9HLTahZZkGCDOfIB0pLFCMtwI6tgO82kkp4yWX7z11kXb4uKegftBZ2WLAUgf8VNe2QSxIdU2fi2ytxXeGQMapJp8vs6RcCdr7IvtwpmA8KrZ8iKR1jjKNjaQTxcscic1Q7nHH1JZ__cEFpH7OR82Rbe5Z_a__f1yTv0fWHAI9fK6Xm6QEI4FwuIL_xWtI-UivdAbQJmBA4JfcwxXHD4F2wlWEcMyGpUVz4xNiu1=w477-h357-no?authuser=0',
  },
];

const LastYear = () => {
  const theme = useTheme();
  return (
    <CampoutMain>
      <Box>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            xs={12}
            lg={8}
          >
            <Box position="relative" width={1}>
              <Box
                component={'img'}
                loading="lazy"
                height={721}
                width={1}
                src={
                  'https://s3-alpha-sig.figma.com/img/c89d/4e12/eefe946ff30cbb1cb7a179dbdea276cb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Laf-0O8AHbiQ3adR48PYDVWA6Bz~~hAmuaJ2Cb7nisp2ZbAs2~1DTjLei-HnHJ2hlfdZ-UtrhU1DeovvyLd4gEEf3dCstgWjEuFz-Y~o1KKZ~P6tLV7rc7kkQk86dUWXLwBvAQrsvsquvEhup5tKgTb2XkhiVfQZnOM0i-CLhfOKjLoTSIFDlS9oVdUIx9xbVrtRVeMuce4jGUysvqwElDDf60PvOzSNBVvQjRTiCx~28mfzlpUNL2OxB75zNfD77Xk805XOTHiGv~XrbTxETueqWp0gM48GF~IFLyX3SuEGEXDV9vg5JIrhjfT7zZxfD2lXBZK22K~Z7MvPfNM~Fg__'
                }
                alt="BAAAHS Campout 2024 background image"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                width={1}
                height={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box 
                  width={500} 
                  bgcolor={theme.palette.primary.main}
                >
                  <BAAAHSLogo />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box marginBottom={4}>
          <Typography align={'center'} fontWeight={600} component="h1">
            Previous Years
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent={'center'}>
          {contentItems.map((item, key) => (
            <Grid
              contentItems
              key={key}
              xs={12}
              md={6}
              xl={4}
            >
              <Box display="flex" alignItems="center" justifyContent="center" marginBottom={4}>
                <Box 
                  component="img" 
                  loading="lazy"
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  sx={{
                    objectFit: 'cover',
                    filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CampoutMain>
  );
};

export default LastYear;
