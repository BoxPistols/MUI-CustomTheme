import {
  CustomTable,
  CustomTableCell,
  CustomTableContainer,
  CustomTableHeader,
  CustomTableRow,
} from '../../components/Table'
import { Box, TableBody, TablePagination } from '@mui/material'
import { ChangeEvent, useState } from 'react'

// データモックアップ
import Data from '../../lib/mock-data/jp-person.json'
const mockDatas = Data.datas

// Table Title Example Data /
type Column = {
  key: string // 表示データ（データ項目）
  label: string //タイトル表示
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit' // テキストの左右、中央の寄せオプション
  // 各Cellの幅カスタム指定
  minWidth?: number // 最小幅
  maxWidth?: number // 最大幅 ※最大幅を指定する時は最小幅も明示する
}
// ここで各見出しの表示情報に加え、列幅などのUIを調整していく。なければデフォルト値が設置される。
const columns: Column[] = [
  {
    key: 'id', //jsonなどのデータの取得キー
    label: 'ID', //表示文字列
    minWidth: 50, //最小幅
    align: 'center', //テキスト位置
  },
  {
    key: 'full_name',
    label: '氏名',
  },
  {
    key: 'kana',
    label: 'カナ',
    minWidth: 140,
    maxWidth: 180,
  },
  {
    key: 'gender',
    label: '性別',
    minWidth: 40,
    maxWidth: 60,
    align: 'center',
  },
  {
    key: 'mail',
    label: 'メール',
    minWidth: 160,
  },
  {
    key: 'phone',
    label: '電話',
  },
  {
    key: 'address',
    label: '都道府県',
  },
  {
    key: 'birth',
    label: '生年月日',
  },
]
export const TablePerson = () => {
  // PageNation
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  // テーブル全体の高さToggle
  const [maxheight, setMaxheight] = useState(false)
  const handleChangeMaxheight = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxheight(event.target.checked)
  }

  // CustomCellの初期値とは別に、このページ内で最小幅/最大幅の共通初期値を指定し直したい時は新たに設置し、style内で反映させます
  const minWidthValue = 120
  const maxWidthValue = 240

  return (
    <>
      {/*
        '基本的なテーブルUI。やや項目が多く、幅の微調整を加えた凡例'
        // テーブル全体の高さToggle
        <TableHeightSwitch
        label="高さ変更"
        checked={maxheight}
        onChange={handleChangeMaxheight}
        />
        }
      /> */}
      {/* テーブルレイアウト */}
      <CustomTableContainer maxHeightValue={maxheight ? '100%' : 480}>
        <CustomTable aria-label="table-aria-name">
          {/* Table Heading */}

          <CustomTableHeader>
            {columns.map((column) => (
              <CustomTableCell
                key={column.key}
                align={column.align}
                style={{
                  // CustomCellの初期値とは別に、このページ内で最小幅/最大幅の共通初期値を指定し直したい時は新たに設置し、style内で反映させます
                  minWidth: column.minWidth ? column.minWidth : minWidthValue,
                  maxWidth: column.maxWidth ? column.maxWidth : maxWidthValue,
                  // 何も幅の指定をしなければ、フォールバックとしてCustomTableCellで指定済のmin/max値が当てられます
                }}
              >
                {column.label}
              </CustomTableCell>
            ))}
          </CustomTableHeader>

          {/* Table Body */}
          <TableBody>
            {mockDatas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <CustomTableRow key={data.id}>
                  {columns.map((column) => {
                    return (
                      <CustomTableCell
                        key={column.key}
                        align={column.align}
                        style={{
                          // TableHeadだけの指定だけでもおよそ同一の幅が確保出来ますが、厳密には別の性質を持った要素なので、基本的にはTableHeadと同じ設定をします。又はBody内固有の調整が必要であれば独立して調整も出来ます。
                          minWidth: column.minWidth
                            ? column.minWidth
                            : minWidthValue,
                          maxWidth: column.maxWidth
                            ? column.maxWidth
                            : maxWidthValue,
                          // 何も幅の指定をしなければ、フォールバックとしてCustomTableCellで指定済のmin/max値が当てられます
                        }}
                      >
                        {/* {value} */}
                        {data[column.key as keyof typeof data]}
                      </CustomTableCell>
                    )
                  })}
                </CustomTableRow>
              ))}
          </TableBody>
        </CustomTable>
      </CustomTableContainer>
      <Box pr={2}>
        <TablePagination
          rowsPerPageOptions={[10, 30, 50, 100]}
          component="div"
          count={mockDatas.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={'表示行数'}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  )
}
