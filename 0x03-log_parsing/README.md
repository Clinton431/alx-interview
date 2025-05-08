# Log Parsing

A robust and flexible tool for parsing, analyzing, and extracting valuable insights from log files of various formats.

## Overview

Log Parsing is designed to help developers, system administrators, and DevOps engineers efficiently process and analyze log files from different systems and applications. It converts unstructured log data into structured formats that can be easily queried, visualized, and analyzed.

## Features

- **Multi-format Support**: Parse logs from various formats including Apache, Nginx, JSON, syslog, and custom formats
- **Pattern Recognition**: Automatically detect and extract fields from log entries
- **Filtering Capabilities**: Filter logs based on timestamps, severity levels, or custom criteria
- **Performance Optimization**: Fast processing with minimal memory footprint
- **Data Transformation**: Convert logs into structured formats (JSON, CSV, etc.)
- **Statistical Analysis**: Generate insights and metrics from log data
- **Error Detection**: Identify and highlight error patterns and anomalies
- **Visualization Support**: Export data in formats compatible with visualization tools

## Installation

```bash
# Using pip
pip install log-parsing

# Using poetry
poetry add log-parsing

# From source
git clone https://github.com/yourusername/log-parsing.git
cd log-parsing
pip install -e .
```

## Quick Start

```python
from log_parsing import LogParser

# Initialize parser with appropriate format
parser = LogParser(format="apache")

# Parse a log file
parsed_data = parser.parse_file("access.log")

# Filter logs by status code
errors = parsed_data.filter(status_code=500)

# Export to JSON
errors.export("errors.json", format="json")

# Generate statistics
stats = parsed_data.statistics()
print(f"Total requests: {stats.total_requests}")
print(f"Error rate: {stats.error_rate}%")
```

## Command Line Usage

```bash
# Parse a log file
log-parse --file access.log --format apache

# Filter for errors and export as JSON
log-parse --file access.log --format apache --filter "status_code>=400" --output errors.json

# Generate a summary report
log-parse --file access.log --format apache --report summary
```

## Supported Log Formats

- Apache Common Log Format
- Apache Combined Log Format
- Nginx access logs
- JSON logs
- Syslog
- AWS CloudWatch Logs
- Custom formats via regex patterns

## Configuration

Create a configuration file `log_parsing.yaml` to customize behavior:

```yaml
default_format: apache
output_format: json
time_zone: UTC
filters:
  exclude_status:
    - 304
    - 200
performance:
  batch_size: 1000
  workers: 4
```

## Advanced Usage

### Custom Format Parsing

```python
from log_parsing import LogParser, LogPattern

# Define a custom pattern
pattern = LogPattern(
    regex=r'(?P<timestamp>.*) \[(?P<level>.*)\] (?P<message>.*)',
    timestamp_format='%Y-%m-%d %H:%M:%S'
)

# Create parser with custom pattern
parser = LogParser(pattern=pattern)
results = parser.parse_file("custom.log")
```

### Real-time Log Processing

```python
from log_parsing import LogStreamProcessor

# Create a stream processor
processor = LogStreamProcessor(format="syslog")

# Set up alerts
processor.add_alert(
    condition="level == 'ERROR'",
    action="email",
    target="admin@example.com"
)

# Start monitoring
processor.monitor("/var/log/system.log")
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

