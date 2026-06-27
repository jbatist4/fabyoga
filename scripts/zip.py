import zipfile
import pathlib

out_dir = pathlib.Path("out")
zip_path = pathlib.Path("fabyoga.zip")

if not out_dir.exists():
    print("Pasta 'out/' não encontrada. Rode 'npm run build' antes.")
    raise SystemExit(1)

with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
    for file in sorted(out_dir.rglob("*")):
        if file.is_file():
            zf.write(file, file.relative_to(out_dir).as_posix())

size_mb = zip_path.stat().st_size / 1_048_576
print(f"fabyoga.zip gerado — {size_mb:.2f} MB")
